import { faCartShopping, faHeart, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

export default function HeaderActions() {
    return (
        <div className='flex items-center gap-5 text-gray-500'>
            
            <button className='hover:text-orange-400 cursor-pointer hidden lg:block'>
                <FontAwesomeIcon icon={faHeart} className='text-xl' />
            </button>
            <button className='hover:text-orange-400 cursor-pointer hidden lg:block'>
                <FontAwesomeIcon icon={faSearch} className='text-xl' />
            </button>
            <button className='hover:text-orange-400 cursor-pointer'>
                <FontAwesomeIcon icon={faCartShopping} className='text-xl' />
            </button>
            <Link href={'/sign-in'} className='hover:text-orange-400 cursor-pointer'>
                {/* <FontAwesomeIcon icon={faUser} className='text-xl' /> */}
                Sign In
            </Link>
        </div>
    )
}
