import React, { useEffect, useState } from 'react'
import CollectForm from '../components/CollectForm'
import { OpeningsData } from '../static/OpeningData'

function CollectCv() {

    const [Data, setData] = useState([])

    useEffect(() => {

        const loc = location.search

        const id = loc.substring(4)

        OpeningsData?.map((data) => {
            if (data?.id == id) {
                setData(data)
            }
        })
        return () => {

        }
    }, [])


    return (
        <section className="bg-gray-100 ">
            <div className="mx-auto shadow-lg max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">

                <div className=" ">
                    <a href="" className="text-2xl font-bold text-pink-600">
                        {Data?.company}
                    </a>

                    <p className="w-full text-sm">

                        {Data?.company_description}
                    </p>
                    <div className="mt-8">


                        <address className="text-2xl font-bold text-pink-600">
                            {Data?.role}
                        </address>
                        <p className='text-md font-medium mt-2 mb-2'>
                            Job Description
                        </p>
                        <p className=" text-sm">
                            {Data?.role_description}
                        </p>
                        <p className='text-md font-medium mt-2 mb-2'>
                            Responsibilities
                        </p>
                        <div className='ml-4'>
                            {
                                Data?.responsibility?.map((resp) => {
                                    return (
                                        <ol style={{ listStyleType: 'inherit' }}>
                                            <li> {resp} </li>
                                        </ol>
                                    )
                                })
                            }
                        </div>
                        <p className='text-md font-medium mt-2 mb-2'>
                            Requirements
                        </p>
                        <div className='ml-4'>
                            {
                                Data?.requirement?.map((resp) => {
                                    return (
                                        <ol style={{ listStyleType: 'inherit' }}>
                                            <li> {resp} </li>
                                        </ol>
                                    )
                                })
                            }
                        </div>
                        <p className='text-md font-medium mt-2 mb-2'>
                            Benefits
                        </p>
                        <div className='ml-4'>
                            {
                                Data?.benefits?.map((resp) => {
                                    return (
                                        <ol style={{ listStyleType: 'inherit' }}>
                                            <li> {resp} </li>
                                        </ol>
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>
            </div>
            <CollectForm />
        </section>
    )
}

export default CollectCv