"use client"
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import ProfileMenu from './Profile'
import Notification from './Notification'
import HeaderActions from './HeaderActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { usePathname } from 'next/navigation'
import useScrollThread from '@/app/hooks/useScrollThread'

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false)
    // const [isScrolled, setIsScrolled] = useState(false)
    const handleMenu = () => {
        setToggleMenu(!toggleMenu)
    }
    const pageLoc = usePathname()
    console.log(pageLoc);
    const isAuthPage = pageLoc === '/sign-in' || pageLoc === '/sign-up';

    // useEffect(() => {

    //     const handleScroll = () => {
    //         if (window.scrollY > 100) {
    //             setIsScrolled(true)
    //         } else {
    //             setIsScrolled(false)
    //         }
    //     }
    //     window.addEventListener('scroll', handleScroll)
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll)
    //     }

    // }, [])

    const isUp = useScrollThread(200);

    console.log(isUp);

    return (
        <>
            {!isAuthPage && (
                // <header className={`bg-white transition-all duration-300 ${isUp ? 'fixed top-0 left-0 right-0 z-50 w-full' : ''}`}>
                <header className={`bg-white transition-all duration-300 ${isUp ? 'fixed top-0 left-0 right-0 z-50 w-full' : ''}`}>
                    <div className='bg-black text-white p-1.5 text-center text-sm'>
                        Cozy, cute, and safe kids’ furniture! Explore Now!
                    </div>
                    <div className="mx-auto w-full lg:container px-4 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">

                            <div className="flex flex-1 items-center justify-between">

                                <div className="flex shrink-0 items-center">
                                    <button className="cursor-pointer mr-3 block lg:hidden" onClick={handleMenu}>
                                        <FontAwesomeIcon icon={faBars} className='text-xl' />
                                    </button>
                                    <div className=''>
                                        <Link href={'/'}>Logo</Link>
                                    </div>
                                </div>
                                {/* <div className={`${toggleMenu ? 'block' : 'hidden'}  fixed left-0 h-full bg-red-500 lg:block lg:static lg:left-0 lg:bg-transparent lg:z-10 lg:h-auto`}>
                            <Nav />
                        </div> */}
                                <div className={`${toggleMenu ? 'left-0' : '-left-full'}  fixed h-full bg-white top-[95px] w-full max-w-[300px] transition-left duration-300 ease-in-out lg:static lg:left-0 lg:bg-transparent z-10 lg:h-auto lg:w-auto lg:max-w-full`}>
                                    <Nav />
                                </div>
                                <div className='flex items-center justify-center'>
                                    <HeaderActions />
                                    {/* <Notification />
                            <ProfileMenu /> */}

                                </div>
                            </div>

                        </div>
                    </div>



                </header>
            )}
        </>

    )
}
