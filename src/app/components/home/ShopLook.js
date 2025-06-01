"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { Gallery } from 'react-grid-gallery'

export default function ShopLook(props) {
    const { shopLookData } = props;
    
    const images = [
        'products/store1.png',
        'products/store2.png',

    ];



    return (

        shopLookData.map((item) => (
            <div className='relative group overflow-hidden' key={item.id}>
                <Image
                    src={item.image}
                    alt='Product Image'
                    width={800}
                    height={600}
                    className='w-full h-full object-cover relative z-0 backdrop-sepia group-hover:scale-[1.05] transition duration-700'
                />
                <spna className="absolute bg-black/50 w-full h-full top-0 left-0 z-10 hidden opacity-0 group-hover:opacity-100 group-hover:block transition duration-300"></spna>
                <button
                    className='text-white underline absolute bottom-1/2 left-1/2 -translate-x-1/2 uppercase underline-offset-5 opacity-0 translate-y-5 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out z-20 cursor-pointer hover:text-orange-400'
                >
                    View This Look
                </button>


            </div>
        ))

        // <div className='relative group overflow-hidden'>
        //     <Image
        //         src={shopImage}
        //         alt='Product Image'
        //         width={800}
        //         height={600}
        //         className='w-full h-96 object-cover relative z-0 backdrop-sepia group-hover:scale-[1.05] transition duration-700'
        //     />
        //     <spna className="absolute bg-black/50 w-full h-full top-0 left-0 z-10 hidden opacity-0 group-hover:opacity-100 group-hover:block transition duration-300"></spna>
        //     <button
        //         className='text-white underline absolute bottom-1/2 left-1/2 -translate-x-1/2 uppercase underline-offset-5 opacity-0 translate-y-5 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out z-20 cursor-pointer hover:text-orange-400'
        //     >
        //         View This Look
        //     </button>


        // </div>

    )
}
