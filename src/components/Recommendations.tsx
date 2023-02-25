import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Table from "./Table";

const Recommendations = () => {

  const [Data, setData] = useState([])
  const [category, setCategory] = useState("")
  const [experience, setExperience] = useState('')

  const categories = ['Data Science', 'HR', 'Advocate', 'Arts', 'Web Designing',
       'Mechanical Engineer', 'Sales', 'Health and fitness',
       'Civil Engineer', 'Java Developer', 'Business Analyst',
       'SAP Developer', 'Automation Testing', 'Electrical Engineering',
       'Operations Manager', 'Python Developer', 'DevOps Engineer',
       'Network Security Engineer', 'PMO', 'Database', 'Hadoop',
       'ETL Developer', 'DotNet Developer', 'Blockchain', 'Testing']
  const experiences = [
    '0-1','1-2','2-3','3-4','4-5','5+'
  ]

  const getRecommendations = async (e) => {
    e.preventDefault()

    fetch('http://localhost:5000/recommendation', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 'category':category,'experience':experience })
    }).then(res => res.json())
      .then(res => {
        setData(res)
        

      });
  }

  useEffect(() => {

    getRecommendations()
    return () => {

    }
  }, [])


  return (
    <div className="container p-2 mx-auto sm:p-4 md:p-0 dark:text-gray-100 bg-gray-800 shadow-xl space-y-10">
      <NavBar/>
      <div
        className="w-full dark:bg-gray-700 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlc3VtZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')] bg-[rgba(73,1,1,0.6)] py-20 bg-center bg-blend-darken bg-cover"
      >
        <div className="container flex flex-col flex-wrap content-center justify-center  py-20 mx-auto md:p-10 text-white p-4">
          <h1 className="text-5xl antialiased font-semibold leading-none text-center dark:text-gray-100">
            Get Our Top Candidates
          </h1>
          <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-100">
            Find out about skills and experience
          </p>
          <form
            className="flex flex-col flex-wrap justify-center items-center"
            onSubmit={getRecommendations}
          >
            <div className="flex justify-center items-center">
              <div className="mb-3 xl:w-96 flex justify-center items-center space-x-5">
                <select
                  className="form-select appearance-none block w-full px-3 py-1.5 text-basefont-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example"
                 onChange={(e) => setCategory(e.target.value)} defaultValue={category}>
                  
                <option selected>Select a Category</option>
                  {
                    categories.map((ele,index)=>(
                      <option value={ele}>{ele}</option>))
                  }
                </select>
                <select
                  className="form-select appearance-none block w-full px-3 py-1.5 text-basefont-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example"
                onChange={e => setExperience(e.target.value)} defaultValue={experience}
                >
                  
                <option selected>Years of experience</option>
                  {
                    experiences.map((ele)=>(
                      <option value={ele}>{ele}</option>))
                  }
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="p-3 font-semibold rounded-r-lg sm:w-1/3 bg-gray-700  text-white dark:bg-violet-400 dark:text-gray-900 flex justify-center items-center"
            >
              Get applicants
            </button>
          </form>
        </div>
      </div>
      <h2 className="mb-4 text-white text-2xl font-semibold leading-tight text-center">Top Applicants</h2>
      <div className="overflow-x-auto p-8 bg-gray-50">
        <table className="w-full p-6 text-xs text-left whitespace-nowrap">
          <thead>
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Job title</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Email</th>
              <th className="p-3">YOE</th>
              <th className="p-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          {
            Data?.map((el) => (
              <Table
                email={el?.address}
                name={el?.Name}
                phone={el?.phone}
                category={el?.Category}
                yoe={el?.overall_experience}
              />
            ))
          }
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default Recommendations;
