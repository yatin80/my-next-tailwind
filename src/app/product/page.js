'use client';
import React, { useEffect, useState } from 'react';
import ProductComp from '../components/productcomp/ProductComp';
import InfiniteScroll from 'react-infinite-scroll-component';
import BlogSkeleton from '../blog/components/BlogSkeleton';
import ProductSkeleton from '../components/productcomp/ProductSkeleton';


export default function Product() {
    const [prodData, setProdData] = useState([]);
    const [page, setPage] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const LIMIT = 12;

    const [searchItem, setSearchItem] = useState('');
    const [filterProducts, setFilterProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const res = await fetch(`https://dummyjson.com/products?limit=${LIMIT}&skip=${page * LIMIT}`);
            const data = await res.json();

            if (data.products.length === 0) {
                setHasMore(false);
            } else {
                setProdData(prev => [...prev, ...data.products]);
                setPage(prev => prev + 1);
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    // const prodSkeleton = Array.from({ length: 10 }, (_, index) => (
    //     <div className='grid grid-cols-4 gap-4 pt-10'>
    //         <BlogSkeleton />
    //     </div>
    // ));



  

    return (
        <div className="w-full lg:container mx-auto px-4 lg:px-8 py-8">
            <h2 className="text-3xl font-bold text-black">Shop</h2>
           

            <InfiniteScroll
                dataLength={prodData.length}
                next={fetchProducts}
                hasMore={hasMore}
                loader={<ProductSkeleton />}
                endMessage={<p className="text-center py-4">No more products</p>}
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-10">
                    {prodData.map((item) => (
                        <ProductComp
                            key={item.id}
                            prodName={item.title}
                            prodPrice={item.price}
                            prodImage={item.images}
                            prodHoverImage={item.images}
                            rating={item.rating}
                            id={item.id}
                        />
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    );
}
