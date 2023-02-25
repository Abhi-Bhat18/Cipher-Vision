import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
function EntryPoint() {
    return (
        <section
            className="overflow-hidden bg-[url(https://w.wallhaven.cc/full/l8/wallhaven-l8mz5r.png)] bg-cover bg-center bg-no-repeat"
        >
            <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="max-w-lg text-white text-4xl text-center sm:text-left">
                <Typewriter
                            words={[ 'Cipher', 'Recruitment',"Vision"]}
                            loop={5}
                            typeSpeed={70}
                            deleteSpeed={50}
                            
                            delaySpeed={1000}
                        /> 
                    {/* <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
                        Cipher recruitment vision
                    </h2> */}
                    <p
                        className="hidden max-w-md text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed"
                    >
                        We help with 3A ( Assess, Analyze, Adapt) to bring your New Employee. You hire us and we take care of everything else
                    </p>
                    <div className="mt-4 sm:mt-8 space-x-5">
                        <a
                            href="/recommendations"
                            className="inline-flex items-center rounded-full bg-indigo-700 px-8 py-3 text-white shadow-lg transition hover:bg-indigo-600 focus:outline-none focus:ring"
                        >
                            <span className="text-sm font-medium">  Hire Now </span>

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
                        <a
                            href="/showopenings"
                            className="inline-flex items-center rounded-full bg-indigo-700 px-8 py-3 text-white shadow-lg transition hover:bg-indigo-600 focus:outline-none focus:ring"
                        >
                            <span className="text-sm font-medium">  Apply Now </span>

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
            </div>
        </section>
    )
}

export default EntryPoint