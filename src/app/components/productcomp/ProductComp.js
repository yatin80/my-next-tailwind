import { faArrowRightArrowLeft, faCartShopping, faEye, faHeart, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

export default function ProductComp({ id, prodName, prodPrice, prodImage, prodHoverImage, rating }) {
    // console.log("product data check", prodName, prodPrice, prodImage, prodHoverImage, rating);
    const starts = Array(5).fill(0);
    // console.log("starts array", starts);
    // const title = prodName.split(' ').join('_');
    return (
        <div className='cursor-pointer'>
            <div className='bg-gray-100 mb-4 relative group'>
                <div className='relative group/image'>
                <Link href={`/product/${id}`}><img
                        src={prodImage}
                        alt='Product Image'
                        width={800}
                        height={600}
                        className='w-full h-96 object-cover relative'
                    />
                    <img
                        src={prodHoverImage}
                        alt='Product Image'
                        width={800}
                        height={600}
                        className='w-full h-96 object-cover absolute top-0 left-0 opacity-0 group-hover/image:opacity-100 group-hover/image:roate-0 transition duration-300'
                    /></Link>
                </div>
                <button className='bg-white w-10 h-10 flex items-center justify-center absolute top-4 right-4 opacity-0 -translate-y-4 group-hover:opacity-100 transition duration-300 group-hover:translate-0 hover:bg-orange-500 hover:text-white cursor-pointer'>
                    <FontAwesomeIcon icon={faHeart} />
                </button>
                <button className='bg-white w-10 h-10 flex items-center justify-center absolute top-16 right-4 opacity-0 -translate-y-4 group-hover:opacity-100 transition duration-300 delay-100 group-hover:translate-0 hover:bg-orange-500 hover:text-white cursor-pointer'>
                    <Link href={`/product/${id}`}><FontAwesomeIcon icon={faEye} /></Link>
                </button>
                <button className='bg-white w-10 h-10 flex items-center justify-center absolute top-28 right-4 opacity-0 -translate-y-4 group-hover:opacity-100 transition duration-300 delay-150 group-hover:translate-0 hover:bg-orange-500 hover:text-white cursor-pointer'>
                    <FontAwesomeIcon icon={faCartShopping} />
                </button>
            </div>
            <div className='text-center'>
                <h2 className='text-2xl text-center m-0 hover:text-orange-400'>
                    <Link href={`/product/${id}`}>{prodName}</Link>
                </h2>
                <div className='text-md text-gray-600 font-light my-2'>${prodPrice}</div>
                <div className='flex gap-1 justify-center items-center'>
                    {starts.map((index) => {
                        const isFilled = rating > index;
                        // console.log("isFilled", isFilled);

                        return (
                            <FontAwesomeIcon key={index} icon={faStar} className={`${isFilled ? 'text-orange-400' : 'text-gray-400'}`} />
                        )
                    })}
                    <span className='text-md text-gray-500'>({rating})</span>
                    {/* <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /> <span className='text-md text-gray-500'>({rating})</span> */}
                </div>
            </div>
        </div>
    )
}
