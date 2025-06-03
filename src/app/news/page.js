"use client"
import React, { useEffect, useState } from 'react'
import BlogComp from '../blog/components/BlogComp';
import BlogSkeleton from '../blog/components/BlogSkeleton';
import BlogDetails from '../blog/components/BlogDetails';

export default function News() {
    const [blogData, setBlogData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showDrawer, setShowDrawer] = useState(false);

    useEffect(() => {
        const blogData = () => {
            setLoading(true);
            fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=8a7dce9fdfcc4b799cee94e482e6b104')
                .then(res => res.json())
                .then(data => {

                    setBlogData(data.articles);
                    setTimeout(() => {
                        setLoading(false);
                    }, 1500);
                })
        }
        blogData();
    }, [])
    console.log("Blog data", blogData);

    const handleShowDrawer = (id) => {
        fetch(`https://newsapi.org/v2/everything?q=${id}&apiKey=8a7dce9fdfcc4b799cee94e482e6b104`)
            .then(res => res.json())
            .then(data => {
                console.log("Blog Details data", data);
            })
        setShowDrawer(true);
    }

    return (
        <div className="w-full lg:container mx-auto px-4 lg:px-8 py-8">
            <h2 className="text-3xl font-bold text-black">News</h2>




            {/* <div className="text-center">
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-example" data-drawer-show="drawer-example" aria-controls="drawer-example" onClick={handleShowDrawer}>
                    Show drawer
                </button>
            </div> */}






            {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-8">
                    {Array.from({ length: blogData.length }).map((_, index) => (
                        <BlogSkeleton key={index} />
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-8">
                    {blogData.map((item) => (
                        <BlogComp key={item.title} title={item.title} urlToImage={item.urlToImage} description={item.description} author={item.author} publishedAt={item.publishedAt} source={item.source.name} handleShowDrawer={handleShowDrawer} />
                    ))}
                </div>
            )}

            <BlogDetails showDrawer={showDrawer} setShowDrawer={setShowDrawer} />

        </div>
    )
}
