import React from 'react'
import { OpeningsData } from '../static/OpeningData'
function Openings() {
    return (
        <div className="overflow bg-[url(https://w.wallhaven.cc/full/l8/wallhaven-l8mz5r.png)] bg-cover bg-center bg-no-repeat">
            <h2 className="mx-auto ml-96 pt-20 text-2xl font-bold text-white sm:text-3xl md:text-5xl">
                Apply to Current Openings
            </h2>
            <div className='mx-auto shadow-lg max-w-screen-xl  overflow-scroll grid grid-cols-2 m-4 '>
                {OpeningsData?.map((data) => {
                    const { company, company_description, id, role, role_description, responsibility, benefits, requirement } = data
                    return (

                        <div
                            className="m-4 bg-white  relative block  rounded-lg border border-gray-100 p-8"
                        >
                            <span
                                className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                            ></span>

                            <div className="justify-between sm:flex">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">
                                        {role}
                                    </h3>

                                    <p className="mt-1 text-xs font-medium text-gray-600">By {company}</p>
                                </div>

                                <div className="ml-3 hidden flex-shrink-0 sm:block">
                                    <img
                                        alt="Paul Clapton"
                                        src="https://images.unsplash.com/photo-1621274790572-7c32596bc67f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80"
                                        className="h-16 w-16 rounded-lg object-cover shadow-sm"
                                    />
                                </div>
                            </div>

                            <div className="mt-4 sm:pr-8">
                                <p className="text-sm text-gray-500">
                                    {role_description}
                                </p>
                            </div>

                            <dl className="mt-6 flex">
                                <div className="flex flex-col-reverse">
                                    <dt className="text-sm font-medium text-gray-600">{company}</dt>
                                    <dd className="text-xs text-gray-500">31st June, 2021</dd>
                                </div>


                            </dl>
                            <div className="mt-4 sm:mt-8">
                                <a
                                    href={`/${company}/${role}?id=${id}`}
                                    className="inline-flex bg-gradient-to-r from-green-900 via-blue-900 to-purple-900 items-center rounded-full bg-indigo-700 px-8 py-3 text-white shadow-lg transition hover:bg-indigo-600 focus:outline-none focus:ring"
                                >
                                    <span className="text-sm font-medium">  Apply Now</span>

                                    <svg
                                        className="ml-3 h-5 w-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}

export default Openings

