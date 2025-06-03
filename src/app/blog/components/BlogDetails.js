import React from 'react'

export default function BlogDetails({ showDrawer, setShowDrawer }) {
    return (
        <>
            {showDrawer && (

                <div className='bg-black opacity-30 fixed top-0 left-0 z-40 h-screen w-full' onClick={() => setShowDrawer(false)}></div>
            )}
            <div className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-1/2 dark:bg-gray-800 ${showDrawer ? 'translate-x-0' : 'translate-x-full'}`} tabindex="-1" aria-labelledby="drawer-label">
                dsdsdsdsfd
            </div>
        </>
    )
}
