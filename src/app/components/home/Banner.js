import Image from 'next/image'
import React from 'react'

export default function Banner() {
    return (
        <div className='h-[calc(100vh-96px)] xl:h-[800px] bg-yellow-900 relative flex justify-center items-center'>
            <div className='relative z-10 text-center'>
                <h2 className='text-md font-bold text-white uppercase'>Welcome to magical space</h2>
                <h1 className='text-white text-4xl w-5/6 mt-2 lg:max-w-8/12 mx-auto font-normal lg:leading-[70px]'>Create A Dreamy Room For Your Little One</h1>
                <button className='border-1 border-white text-white bg-transparent hover:bg-white hover:text-black font-bold py-3 px-6 mt-5 tracking-[2px] cursor-pointer'>
                    Shop Now
                </button>
            </div>
            <img
                src="https://images.unsplash.com/photo-1490129375591-2658b3e2ee50?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2244&q=80"
                alt="Banner"
                className='h-full w-full object-cover brightness-50 absolute top-0 left-0 z-0'
            />
        </div>
    )
}
