import React from 'react'

export default function ProductSkeleton() {
    return (
        <div className='grid grid-cols-4 gap-4 pb-4'>
            {Array.from({ length: 12 }, (_, index) => (
                <div className='cursor-pointer'>
                    <div className='border-1 border-gray-300 rounded-lg bg-white mb-4 relative group'>
                        <div className='relative group/image w[384px] h-[384px] animate-pulse bg-gray-200'>


                        </div>

                    </div>
                    <div className='text-center'>
                        <h2 className='text-2xl text-center m-0 bg-gray-200 w-full h-10 animate-pulse'></h2>
                        <div className='text-md text-gray-600 font-light my-2 w-20 h-4 bg-gray-200 animate-pulse'></div>
                        {/* <div className='flex gap-1 justify-center items-center'>
                    {starts.map((index) => {
                        const isFilled = rating > index;
                        // console.log("isFilled", isFilled);

                        return (
                            <FontAwesomeIcon key={index} icon={faStar} className={`${isFilled ? 'text-orange-400' : 'text-gray-400'}`} />
                        )
                    })}
                    <span className='text-md text-gray-500'>({rating})</span>
                    <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /> <span className='text-md text-gray-500'>({rating})</span>
                </div> */}
                    </div>
                </div>
            ))}
        </div>

    )
}
