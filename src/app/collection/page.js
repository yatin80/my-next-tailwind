"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductComp from "../components/productcomp/ProductComp";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import ProductSkeleton from "../components/productcomp/ProductSkeleton";

export default function Collection() {
    const [prodData, setProdData] = useState([]);   
    const [loading, setLoading] = useState(false);


    const [searchItem, setSearchItem] = useState('');

    const fetchProducts = async () => {
        setLoading(true);
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {

                setProdData(data.products);
                setTimeout(() => {
                    setLoading(false);
                }, 1500);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    };

    useEffect(() => {
        fetchProducts();
    }, []);




    const handleSearch = (e) => {
        const searchVal = e.target.value;
        setSearchItem(searchVal);
        console.log(searchVal);
        if (searchVal.length > 0) {
            const filteredData = prodData.filter((item) => item.title.toLowerCase().includes(searchVal.toLowerCase()));
            setProdData(filteredData);
        } else {
            fetchProducts();
        }
    }
    return (
        <div className="w-full lg:container mx-auto px-4 lg:px-8 py-8">
            <h2 className="text-3xl font-bold text-black">Collection</h2>
            <div className='relative mt-5'>
                <input type="text" placeholder='Search' className='w-full border-1 border-gray-500 rounded-md p-3'
                    value={searchItem}
                    onChange={handleSearch} />
                <button className='absolute right-3 top-3.5'>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
            {searchItem.length > 0 && (
                <div className='mt-5'>
                    <h2 className='text-2xl font-bold text-black'>Search Results</h2>
                    <ul>
                        {prodData.map(item => <li key={item.id}>{item.firstName}</li>)}
                    </ul>
                </div>
            )}

            {loading ? (
                Array.from({ length: 12 }).map((_, index) => (
                    <ProductSkeleton key={index} />
                ))
            ) : (
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
            )}

        </div>
    )
}