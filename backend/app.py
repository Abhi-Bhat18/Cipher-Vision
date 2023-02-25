from flask import Flask, request, jsonify, render_template
import numpy as np
import pickle
import pandas as pd
import PyPDF2
from flask_sqlalchemy import SQLAlchemy
from werkzeug.utils import secure_filename
import re
from flask_cors import CORS, cross_origin


# importing ML models
from flask import Flask, render_template
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import train_test_split
from sklearn.metrics.pairwise import cosine_similarity

resume = pd.read_csv("data/cleaned_dataset.csv")
resume.drop("Category", axis=1, inplace=True)
old = pd.read_csv("data/UpdatedResumeDataSet.csv")
resume['Category'] = old['Category']

X = resume[['Category', 'Name','address','phone','cleaned_resume', 'overall_experience','score']]
y = resume['Category']

X_train, X_test, y_train, y_test = train_test_split(
    X, y, random_state=42, test_size=0.2)
X_train.reset_index(inplace=True)
X_train.drop("index", axis=1, inplace=True)

tfidf = TfidfVectorizer(stop_words="english")
tfidf_fit = tfidf.fit_transform(X_train['cleaned_resume'])
cosine_sim = cosine_similarity(tfidf_fit, tfidf_fit)
index_sim = pd.Series(
    X_train.index, index=X_train['Category']).drop_duplicates()


def get_recommendations(title):
    idx = index_sim[title]
    sim_scores = list(enumerate(cosine_sim[idx]))
    sim_scores = sorted(sim_scores, key=lambda x: x[0], reverse=True)
    sim_scores = sim_scores[1:20]
    resume_indices = [i[0] for i in sim_scores]
    return list(X_train['Name'].iloc[resume_indices].values)

def cleanResume(resumeText):
    resumeText = re.sub('http\S+\s*', ' ', resumeText)  # remove URLs
    resumeText = re.sub('RT|cc', ' ', resumeText)  # remove RT and cc
    resumeText = re.sub('#\S+', '', resumeText)  # remove hashtags
    resumeText = re.sub('@\S+', '  ', resumeText)  # remove mentions
    resumeText = re.sub('[%s]' % re.escape("""!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"""), ' ', resumeText)  # remove punctuations
    resumeText = re.sub(r'[^\x00-\x7f]',r' ', resumeText) 
    resumeText = re.sub('\s+', ' ', resumeText)  # remove extra whitespace
    return resumeText

# Flask app
app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///Candidate_Master.db'
db = SQLAlchemy(app)
app.app_context().push()
CORS(app)

# Creating Database models


class Basic_info(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(200), nullable=False)
    last_name = db.Column(db.String(200), nullable=False)
    email = db.Column(db.String(200), nullable=False)
    phone = db.Column(db.String(200), nullable=False)
    github_link = db.Column(db.String(200), nullable=False)
    linked_link = db.Column(db.String(200), nullable=False)
    message = db.Column(db.String(1000000), nullable=False)
    resume_data = db.Column(db.String(1000000), nullable=False)

# Routes
@app.route('/', methods=['POST', 'GET'])
def index():
    return "Hello world"


@app.route('/getdata', methods=['POST'])
def getdata():
    try:
        # Collecting data from the request
        data = request.form
        print(data)
        Fname = data['Fname']
        Lname = data["Lname"]
        Email = data["Email"]
        Phone = data["Phone"]
        Github = data["Github"]
        LinkedIn = data["Linkedin"]
        Message = data["Message"]
        resumeFile = request.files["resume"]
        resumeFile.save(secure_filename(resumeFile.filename))

        # extracting text from pdf
        pdfFileObj = open(resumeFile.filename, 'rb')
        pdfReader = PyPDF2.PdfFileReader(pdfFileObj)
        # creating a page object
        resumedata = ""

        for page in range(pdfReader.numPages):
            pageObj = pdfReader.getPage(page)
            resumedata += pageObj.extractText()

        pdfFileObj.close()

        print(resumedata)
        # filtered = cleanResume(resumedata)
        # print(resumedata)

        user = Basic_info(
            first_name=Fname,
            last_name=Lname,
            email=Email,
            phone=Phone,
            github_link=Github,
            linked_link=LinkedIn,
            message=Message,
            resume_data=resumedata
        )

        db.session.add(user)
        db.session.commit()
        return "done"
    except:
        return "sorry"


@app.route('/viewdata', methods=['GET'])
def viewdata():
    data = Basic_info.query.all()
    resumeDatas = []
    for user in data:
        resumeDatas.push(user.resume_data)
    return 'success'


@app.route('/recommendation', methods=['POST'])
def recommendation():
    inp = request.json
    limit = inp['experience']
    limits = limit.split('-')
    try:
        valid = get_recommendations(inp["category"])
        data = X_train.sort_values(by=['overall_experience'],  ascending=False) 
        data = data.sort_values(by=['score'],ascending=False)
        df = data[data['Name'].apply(lambda x:x in valid)]
        if len(limits)>1:
            df = df[df['overall_experience']>= int(limits[0])]
            data = df[df['overall_experience']<= int(limits[1])]
        else:
            data = df[df['overall_experience']>= 5]
        print(data)
        data = data.reset_index().to_json(orient="records")
        return data,200
    except KeyError:
        return f"Available Category Skills: {X_train['Category'].unique()}"

        
if __name__ == "__main__":
    app.run(debug=True)
