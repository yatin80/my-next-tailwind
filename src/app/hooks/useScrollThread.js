import React, { useEffect, useState } from 'react'

export default function useScrollThread(scrollThred = 100) {
    const [isScrolled, setIsScrolled] = useState(false)
    // useEffect(() => {
    //     const handleScroll = () => {
    //         setIsScrolled(window.scrollY < threshold);
    //     };
    //     window.addEventListener('scroll', handleScroll)
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll)
    //     }

    // }, [isScrolled]);
    
    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [isScrolled])

    return isScrolled;
}
