"use client"
import { UserContext } from '@/app/context/UserContext'
import React, { useContext } from 'react'

// export const metadata = {
//     title: 'About Us',
//     description: 'About us page for the application',
// }

const listData = [
    {
        name: "John Doe",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    },
    {
        name: "Jane Smith",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    },
    {
        name: "Alice Johnson",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    }
]
export default function AboutUs() {
    const {toggleMenu, setToggleMenu} = useContext(UserContext);
    return (
        <div className='container mx-auto p-5'>
            {toggleMenu && <h1 className='text-3xl font-bold'>About Us Page </h1>}
            <div className='w-72 bg-white mt-5 rounded-lg shadow-md p-4 border-gray-100 border-1 flex items-center group'>
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""
                    className='w-20 h-w-20 object-cover rounded-full'
                />
                <div className='pl-4'>
                    <h3 className='font-semibold text-2xl'>John Doe</h3>
                    <button className='bg-blue-500 text-white rounded-lg px-2 py-1 text-sm mt-1 group-hover:bg-red-800 relative after:absolute after:content-[""] after:w-5 after:h-5 after:bg-red-500'>Contact</button>
                </div>
            </div>


            <label
                className="has-checked:bg-indigo-50 has-checked:text-indigo-900 has-checked:ring-indigo-200 dark:has-checked:bg-indigo-950 dark:has-checked:text-indigo-200 dark:has-checked:ring-indigo-900 ..."
            >

                Google Pay
                <input type="radio" className="checked:border-indigo-500 ..." />
            </label>

            <div className='mt-10'>
                <ul>
                    {/* {listData.map((item) => (
                        <li className='flex items-center gap-2 border-b border-gray-200 py-2.5 last:border-b-0 relative group' key={item.name}>
                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""
                                className='w-10 h-w-10 object-cover rounded-full'
                            />
                            <div className='pl-4'>
                                <h3 className='font-semibold text-lg'>John Doe</h3>
                                <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
                            </div>

                            <div className='w-3 h-3 absolute right-0 top-1/2 -translate-y-1/2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                            </div>
                        </li>
                    ))} */}

                    <li className='flex items-center gap-2 border-b border-gray-200 py-2.5 last:border-b-0 relative group'>
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""
                            className='w-10 h-w-10 object-cover rounded-full'
                        />
                        <div className='pl-4'>
                            <h3 className='font-semibold text-lg'>John Doe</h3>
                            <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
                        </div>

                        <div className='hidden w-3 h-3 absolute right-0 top-1/2 -translate-y-1/2 group-has-[a]:block'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                        </div>
                    </li>
                    <li className='flex items-center gap-2 border-b border-gray-200 py-2.5 last:border-b-0 relative group'>
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""
                            className='w-10 h-w-10 object-cover rounded-full'
                        />
                        <div className='pl-4'>
                            <h3 className='font-semibold text-lg'>John Doe</h3>
                            <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, <a href='#'>voluptatibus</a>.</p>
                        </div>

                        <div className='hidden w-3 h-3 absolute right-0 top-1/2 -translate-y-1/2 group-has-[a]:block'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                                className='transition-all duration-300 ease-in-out hover:rotate-90'><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                        </div>
                    </li>
                    <li className='flex items-center gap-2 border-b border-gray-200 py-2.5 last:border-b-0 relative group'>
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""
                            className='w-10 h-w-10 object-cover rounded-full'
                        />
                        <div className='pl-4'>
                            <h3 className='font-semibold text-lg'>John Doe</h3>
                            <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
                        </div>

                        <div className='hidden w-3 h-3 absolute right-0 top-1/2 -translate-y-1/2 group-has-[a]:block'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                        </div>
                    </li>


                </ul>

            </div>

            <div className="group is-published">
                <div className="hidden group-[.is-published]:block">
                    Published
                </div>
            </div>

            <div className="selection:bg-red-500 selection:text-fuchsia-900">
                <p>
                    So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my
                    way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all
                    living things but I tell you Jerry at that moment, I <em>was</em> a marine biologist.
                </p>
            </div>

            <div>
                <button popovertarget="my-popover">Check for updates</button>
                <div popover id="my-popover" className="opacity-0 starting:open:opacity-0 ...">
                    Starting
                </div>
            </div>
            <div class="group flex items-center">
                <img class="h-12 w-12 shrink-0 rounded-full" src="..." alt="" />
                <div class="ltr:ml-3 rtl:mr-3">
                    <p class="text-gray-700 group-hover:text-gray-900 ...">dfdsfdsf</p>
                    <p class="text-gray-500 group-hover:text-gray-700 ...">fffff</p>
                </div>
            </div>

        </div>
    )
}
