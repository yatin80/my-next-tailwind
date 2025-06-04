import { faImage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function BlogComp(props) {
    return (
        <div className="border-1 border-gray-300 rounded-lg p-4 flex flex-col md:flex-row gap-8" onClick={props.handleShowDrawer}>
            <div className='w-full md:w-2/5'>
                {props.urlToImage ? (

                    <img
                        src={props.urlToImage}
                        alt=''
                        className='w-full md:w-70 h-68 object-cover rounded-md'
                    />
                ) : (
                    <div className='w-full h-full object-cover rounded-md bg-gray-200 flex items-center justify-center'>
                        <FontAwesomeIcon icon={faImage} className='text-gray-400 text-5xl' />
                    </div>

                )
                }
            </div>
            <div className='flex-1'>
                <div className='border-1 border-gray-300 rounded p-1.5 inline-block text-[12px] uppercase'>
                    {props.source}
                </div>
                <h2 className='mt-2 text-2xl font-semibold text-ellipsis w-full line-clamp-2'>
                    {props.title}
                </h2>
                <p className='text-gray-500 mt-2 text-ellipsis w-full line-clamp-3'>
                    {props.description}
                </p>
                <div className='flex items-center gap-4 mt-4 text-gray-400 text-[13px]'>
                    <span>{props.author}</span> |
                    <span>{props.publishedAt}</span>
                </div>
            </div>
        </div >
    )
}


BlogComp.dafaultProps = {
    title: "",
    urlToImage: "",
    description: "",
    author: "John Doe",
    publishedAt: ""
}