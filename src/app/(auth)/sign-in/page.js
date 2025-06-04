"use client"
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'


export default function SignIn() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const getUser = () => {
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,  // Use the form value instead of hardcoded
                password: password,  // Use the form value instead of hardcoded
                expiresInMins: 30,
            })
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Login failed');
                }
                return res.json();
            })
            .then(data => {
                if (data.token) {
                    localStorage.setItem('token', data.token);
                    router.push('/dashboard');
                } else {
                    alert('Login failed. Please check your credentials.');
                }
            })
            .catch(error => {
                console.error('Login error:', error);
                alert('Login failed. Please check your credentials.');
            });
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(username, password);
        getUser();


    }
    return (

        <div className="bg-white flex justify-center items-center h-screen">
            <div className="w-2/3 h-screen hidden lg:block p-3">
                <img src="https://images.pexels.com/photos/6956800/pexels-photo-6956800.jpeg" alt="Placeholder Image" className="object-cover w-full h-full rounded-lg" />
            </div>
            <div className="lg:p-16 md:p-16 sm:20 p-8 w-full lg:w-2/6">
            <Link href="/" className='mb-6 inline-block border-1 border-black text-black px-3 py-2 cursor-pointer hover:bg-black hover:text-white' >
                <FontAwesomeIcon icon={faHome} /> 
            </Link>
                <h1 className="text-2xl font-semibold mb-4">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label for="username" className="block text-gray-600">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label for="password" className="block text-gray-800">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                            autocomplete="off"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className='flex justify-between items-center mb-6 '>
                        <div className="flex items-center">
                            <input type="checkbox" id="remember" name="remember" className="text-red-500" />
                            <label for="remember" className="text-green-900 ml-2">Remember Me</label>
                        </div>
                        <div className="text-blue-500">
                            <a href="#" className="hover:underline">Forgot Password?</a>
                        </div>
                    </div>
                    <button type="submit" className="bg-gray-700 hover:bg-gray-900 text-white font-semibold rounded-md py-2 px-4 w-full cursor-pointer">Login</button>
                </form>
                <div className="mt-6 text-gray-900 text-center">
                    <a href="#" className="hover:underline">Sign up Here</a>
                </div>
            </div>
        </div>

    )
}
