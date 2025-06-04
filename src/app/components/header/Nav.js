"use client"
import { Menu, MenuButton, MenuItem, MenuItems, Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


export default function Nav({
    NormalLink = "text-gray-900",
    ActiveLink = "text-orange-400",
    HoverLink = "hover:text-orange-400"
}) {
    const pathName = usePathname();

    // console.log("check path name", pathName);


    const links = [
        { name: "Home", href: "/" },
        { name: "Shop", href: "/product" },
        { name: "Collection", href: "/collection" },
        {
            name: "Company",
            dropdown: [
                { name: "About Us", href: "/company/about-us" },
                // { name: "Our Team", href: "/company/our-team" },
                // { name: "Careers", href: "/company/careers" },
            ]
        },
        // { name: "About", href: "/company/about-us" },
        { name: "Services", href: "#" },
        { name: "Blog", href: "/blog" },
        { name: "News", href: "/news" },
        { name: "Contact", href: "#" },
    ]
    return (
        <div className="flex flex-col lg:flex-row space-x-4 xl:space-x-7">
            {links.map((link) => {

                if (link.dropdown) {
                    const isActive = link.dropdown.some((item) => pathName === item.href);
                    console.log("check path name", pathName);
                    return (
                        <Menu as="div" className="relative inline-block text-left" key={link.name}>
                            <MenuButton className={`inline-flex items-center gap-2 rounded-md  px-3 py-2 text-md  font-light   cursor-pointer ${HoverLink} ${isActive ? "text-orange-400" : NormalLink}`}>
                                {link.name}
                            </MenuButton>
                            <MenuItems
                                className="w-52 origin-top-right rounded-xl border border-gray-500 bg-white p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
                                transition
                                anchor="bottom start">
                                {link.dropdown.map((item) => (
                                    <MenuItem key={item.name}>
                                        {({ active }) => (
                                            <Link
                                                href={item.href}
                                                className={`block px-4 py-2 text-sm ${active ? ' text-gray-900' : 'text-gray-700'
                                                    }`}
                                            >
                                                {item.name}
                                            </Link>
                                        )}
                                    </MenuItem>
                                ))}
                            </MenuItems>
                        </Menu>
                    );
                } else {
                    const isActive = pathName == link.href;
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`rounded-md px-3 py-2 text-md   font-light ${HoverLink}
                            ${isActive ? ActiveLink : NormalLink}`}
                        >
                            {link.name}
                        </Link>
                    )
                }

            })}

            {/* <Link href="/" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">Home</Link>
            <Link href="/about-us" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About</Link> */}

        </div>
    )
}

// Nav.propTypes = {
//     NormalLink: "bg-gray-900",
//     ActiveLink: "text-orange-400",
//     HoverLink: "hover:text-orange-400",
// }
