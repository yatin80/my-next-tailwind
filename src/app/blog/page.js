"use client"
import React, { useEffect, useState } from 'react'
import BlogComp from './components/BlogComp';

export default function Blog() {
    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
        const blogData = () => {
            fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8a7dce9fdfcc4b799cee94e482e6b104')
                .then(res => res.json())
                .then(data => {

                    setBlogData(data.articles);

                })
        }
        blogData();
    }, [])
    console.log("Blog data", blogData);

    return (
        <div className="w-full lg:container mx-auto px-4 lg:px-8 py-8">
            <h2 className="text-3xl font-bold text-black">Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-8">
                {blogData.map((item)=>(
                    <BlogComp key={item.title} title={item.title} urlToImage={item.urlToImage} description={item.description} author={item.author} publishedAt={item.publishedAt} />
                ))}
            </div>

        </div>
    )
}
