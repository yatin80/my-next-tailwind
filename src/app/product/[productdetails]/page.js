"use client"
import { faArrowLeft, faMinus, faPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams, useRouter } from 'next/navigation'

import React, { useContext, useEffect, useState } from 'react'
import ProductCount from './components/ProductCount';

// export const metadata = async ({ params, searchParams }) => {
//     const video = await getVideo(params.id)
//     return {
//       title: video.title,
//       description: video.description,
//       keywords: video.tag
//     }
//   }

export default function ProductDetails() {
    const [data, setData] = useState([])
    const params = useParams();
    // const paramsSp = params.productdetails.split('_').join(' ');
    console.log("check params", params);




    const router = useRouter();

    useEffect(() => {
        const getData = () => {
            fetch(`https://dummyjson.com/products/${params.productdetails}`)
                .then(res => res.json())
                .then(data => {
                    setData(data)
                })
        }
        getData();
    }, [])

    console.log(data);



    return (
        <div className="w-full lg:container mx-auto px-4 lg:px-8 py-8">
            <button className='mb-6 border-1 border-black text-black px-3 py-2 cursor-pointer hover:bg-black hover:text-white' onClick={() => router.back()}>
                <FontAwesomeIcon icon={faArrowLeft} className='mr-1' /> Go Back
            </button>
            <div className='grid grid-cols-1 lg:grid-cols-7 gap-10'>
                <div className='border-1 border-gray-300 col-span-4 relative'>
                    <div className='bg-orange-400 inline-block text-white px-3 py-2 text-md absolute right-5 top-5'>{data.discountPercentage}% Off</div>
                    <img src={data.images} alt="" className='w-full h-full object-cover' />
                </div>
                <div className='col-span-3 px-10'>
                    <h2 className='text-3xl font-semiBold text-black'>{data.title}</h2>
                    <div className='my-5 flex gap-5'>
                        <div className='flex gap-1 items-center'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /> <span className='text-md text-gray-500'>({data.rating})</span></div>
                        <span className='text-gray-400'>|</span>
                        <div>
                            {data.availabilityStatus ? <span className='text-md text-green-500'>In Stock ({data.stock})</span> : <span className='text-md text-red-500'>Out of Stock</span>}
                        </div>
                    </div>
                    <h3 className='text-xl font-semiBold text-black'>Price: <span className='text-orange-400'>${data.price}</span></h3>
                    <div className='my-5'>
                        <p className='text-md text-gray-500 leading-7.5'>{data.description}</p>
                    </div>
                    <div className='my-5'>
                        <p className='text-md text-gray-500'>{data.category}</p>
                    </div>
                    <div className='my-5'>
                        <p className='text-md text-gray-500'>{data.brand}</p>
                    </div>
                    <ProductCount />
                    <div className='my-5'>
                        <button className='btn bg-black text-white'>Add to Cart</button>
                    </div>

                </div>
            </div>

        </div>
    )
}
