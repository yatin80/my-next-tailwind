import React from 'react';

const BlogSkeleton = () => {
    return (
        <div className="border-1 border-gray-200 rounded-lg p-4 flex gap-8 animate-pulse">
            <div className='w-2/5 h-68'>
                <div className='w-full h-full object-cover rounded-md bg-gray-200 animate-pulse'></div>
            </div>
            <div className='flex-1'>
                <div className=' rounded p-1.5 inline-block text-[12px] uppercase bg-gray-200 animate-pulse w-11 h-8'></div>
                <h2 className='mt-2 text-2xl font-semibold text-ellipsis w-full line-clamp-2 bg-gray-200 animate-pulse w-full h-8'></h2>
                <p className='text-gray-500 mt-2 text-ellipsis w-full line-clamp-3 bg-gray-200 animate-pulse w-full h-4'></p>
                <div className='flex items-center gap-4 mt-4 text-gray-400 text-[13px]'>
                    <span className='w-10 h-4 bg-gray-200 animate-pulse'></span>
                    <span className='w-10 h-4 bg-gray-200 animate-pulse'></span>
                </div>
            </div>
        </div>

    );
};

export default BlogSkeleton;

