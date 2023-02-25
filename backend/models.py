from flask import Flask,render_template
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import train_test_split
from sklearn.metrics.pairwise import cosine_similarity

resume = pd.read_csv("data/cleaned_dataset.csv")
resume.drop("Category",axis=1,inplace=True)
old = pd.read_csv("data/UpdatedResumeDataSet.csv")
resume['Category'] = old['Category']

X = resume[['Category','Name','cleaned_resume','overall_experience']]
y = resume['Category']

X_train,X_test,y_train,y_test = train_test_split(X,y,random_state=42, test_size=0.2)
X_train.reset_index(inplace=True)
X_train.drop("index",axis=1,inplace=True)

tfidf = TfidfVectorizer(stop_words="english")
tfidf_fit = tfidf.fit_transform(X_train['cleaned_resume'])
cosine_sim = cosine_similarity(tfidf_fit,tfidf_fit)
index_sim = pd.Series(X_train.index, index=X_train['Category']).drop_duplicates()

def get_recommendations(title):
    idx = index_sim[title]
    sim_scores = list(enumerate(cosine_sim[idx]))
    sim_scores = sorted(sim_scores, key=lambda x: x[0], reverse=True)
    sim_scores = sim_scores[1:20]
    resume_indices = [i[0] for i in sim_scores]
    return list(X_train['Name'].iloc[resume_indices].values)

app = Flask(__name__)

@app.route('/')
def home():
   return "Check /similar"

@app.route('/similar')
def similar():
    try:
        valid = get_recommendations("DevOps")
        data = X_train.sort_values(by=['overall_experience'],  ascending=False)
        df = data[data['Name'].apply(lambda x:x in valid)]
        return df.to_html(header="true", table_id="table")
    except KeyError:
        return f"Available Category Skills: {X_train['Category'].unique()}"

if __name__ == "__main__":
    app.run(debug=False)
