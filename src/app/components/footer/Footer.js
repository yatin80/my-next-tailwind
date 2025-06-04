"use client"
import React, { useEffect, useState } from 'react'
import Nav from '../header/Nav'
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import useScrollThread from '@/app/hooks/useScrollThread';
export default function Footer() {
    const pageLoc = usePathname()
    console.log(pageLoc);
    const isAuthPage = pageLoc === '/sign-in' || pageLoc === '/sign-up';

    const handleScrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const [scrollBottom, setScrollBottom] = useState(0);

    useEffect(() => {
        const handleScrollDown = () => {
            const newScrollBottom = document.documentElement.scrollHeight - window.innerHeight - window.scrollY;
            setScrollBottom(newScrollBottom);
            
            
        };

        window.addEventListener('scroll', handleScrollDown);
        handleScrollDown(); // Initial calculation
        return () => window.removeEventListener('scroll', handleScrollDown);
    }, []);

    const isUp = useScrollThread(300);

    return (
        <>
            {!isAuthPage && (
                <footer className='bg-gray-900 py-14'>
                    <div className='container mx-auto'>
                        <div className='flex flex-col justify-center items-center gap-y-8 text-white'>

                            <h1 className='text-2xl font-bold text-white'>E-Commerce</h1>
                            <Nav NormalLink={'text-gray-400'} ActiveLink={'text-orange-400'} HoverLink={'hover:text-orange-400'} />
                            <p className='text-gray-400 text-sm'>© 2024 Ecommerce, Inc. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            )}

            {/* {isUp && */}
            <button onClick={handleScrollUp} className={`fixed bottom-10 right-10 border-1  px-4 py-2 cursor-pointer transition duration-300 z-30 ${isUp ? " translate-y-0 opacity-100" : "  opacity-0 translate-y-10"} ${scrollBottom < 210 ? "border-white text-white hover:bg-white hover:text-black" : "border-gray-600 text-gray-600 hover:bg-gray-900 hover:text-white"}`}>
                <FontAwesomeIcon icon={faArrowUp} />
            </button>

        </>

    )
}
