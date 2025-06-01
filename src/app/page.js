"use client";
import Image from "next/image";
import Banner from "./components/home/Banner";
import BestSeller from "./components/home/BestSeller";
import ShopLook from "./components/home/ShopLook";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

// import { motion } from "motion/react"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";



// const bestSellerData = [
//   {
//     id: 1,
//     name: "Tiny Explorer Bookshelf",
//     price: "$500.00",
//     image: "/products/rack.png",
//     hoverImage: "/products/rack-h.png",
//   },
//   {
//     id: 2,
//     name: "Decorative Wicker Basket",
//     price: "$800.00",
//     image: "/products/wicker-basket.png",
//     hoverImage: "/products/wicker-basket-h.png",
//   },
//   {
//     id: 3,
//     name: "Little Haven Canopy Net",
//     price: "$250.00",
//     image: "/products/canopy-net.png",
//     hoverImage: "/products/canopy-net-h.png",
//   },
//   {
//     id: 4,
//     name: "Aenean leo ligula bed",
//     price: "$780.00",
//     image: "/products/legula-bed.png",
//     hoverImage: "/products/legula-bed-h.png",
//   },
//   {
//     id: 5,
//     name: "Little Haven Canopy Net",
//     price: "$250.00",
//     image: "/products/canopy-net.png",
//     hoverImage: "/products/canopy-net-h.png",
//   },
//   {
//     id: 6,
//     name: "Aenean leo ligula bed",
//     price: "$780.00",
//     image: "/products/legula-bed.png",
//     hoverImage: "/products/legula-bed-h.png",
//   },
// ];



const shopLookData = [
  {
    id: 1,
    image: "/products/store1.png",
  },
  {
    id: 2,
    image: "/products/store2.png",
  },
  {
    id: 3,
    image: "/products/store1.png",
  },
  {
    id: 4,
    image: "/products/store2.png",
  }
]



export default function Home() {
  const [bestSellerData, setBestSellerData] = useState([]);
    useEffect(() => {
      const bestSellerData = () => {
        fetch('https://dummyjson.com/products?limit=6')
          .then(res => res.json())
          .then(data => {
            console.log('bestSellerData 123', data);
            setBestSellerData(data.products);
          });
      }
    
      bestSellerData();
    }, [])
  return (
    <>
   
      <Banner />
      <Link href={'#bestSeller'} className="bg-white text-black rounded-full w-12 h-12 mx-auto  -mt-6 relative z-20 flex items-center justify-center shadow-lg hover:bg-gray-200 transition duration-300">
        <FontAwesomeIcon icon={faArrowDown} />
      </Link>
      {/* Best Seller Section */}
      <div

        className="py-25 px-7.5">
        <div id="bestSeller">
          <motion.div
            initial={{ opacity: 0, transform: "translateY(-100px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ duration: 0.3 }}
            viewport={{ amount: 1 }}>
            <h2 className="text-3xl text-center">Explore Our Best Sellers</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, transform: "translateY(100px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ duration: 0.3 }}
            viewport={{ amount: 0.3 }}>
            <BestSeller bestSellerData={bestSellerData} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, transform: "translateY(100px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ duration: 0.3 }}
            viewport={{ amount: 0.3 }}>
            <Link href={'/products'} className="text-center block mt-10 text-gray-700 text-md underline underline-offset-4 hover:text-orange-400">View All Best Sellers</Link>
          </motion.div>
        </div>
      </div>
      {/* Shop Look Section */}
      <div className="py-25 px-7.5 bg-orange-100">
        <h2 className="text-3xl text-center">Shop This Look</h2>
        <p className="text-center mt-2">Stylish, safe, and fun—our kid’s furniture and decor bring joy and creativity to every little space</p>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-7.5 mt-10'>
          <ShopLook shopLookData={shopLookData} />
        </div>
      </div>

      {/* Pay & Learn Section */}
      <div className="py-25 px-7.5">
        <div className="w-full lg:w-2/3 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-7.5  items-center">
          <div className="max-w-[300px]">
            <h2 className="text-3xl">Pay & Learn</h2>
            <p className="text-gray-600 mt-4.5">Encourage creativity and development with engaging playroom furniture, activity tables, and educational toys designed to spark imagination and fun learning experiences.</p>
          </div>
          <div>
            <div className="relative group w-full lg:w-[460px] h-[575] after:absolute after:w-24 lg:after:w-40 after:h-24 lg:after:h-40 after:bg-orange-100 after:-bottom-5 lg:after:-bottom-18 after:-right-4 lg:after:-right-18 after:rounded-full after:z-0 rotate-3 hover:rotate-0 transition duration-300">
              <Link href={"#"} className="relative overflow-hidden z-10">
                <Image
                  src="/products/play-learn.png"
                  alt="Product Image"
                  width={460}
                  height={575}
                  className="w-full h-full object-cover relative z-0 backdrop-sepia group-hover:scale-[1.05] transition duration-700"
                />
              </Link>

            </div>
          </div>
        </div>

      </div>

      {/* <div className="py-25 px-7.5">
        <div className="w-2/3 mx-auto grid grid-cols-2 gap-7.5  items-center">
          <div className="max-w-[300px]">
            <h2 className="text-3xl">Pay & Learn</h2>
            <p className="text-gray-600 mt-4.5">Encourage creativity and development with engaging playroom furniture, activity tables, and educational toys designed to spark imagination and fun learning experiences.</p>
          </div>
          <div>
            <div className="relative group w-[460px] h-[575] after:absolute after:w-40 after:h-40 after:bg-orange-100 after:-bottom-18 after:-right-18 after:rounded-full after:z-0 rotate-3 hover:rotate-0 transition duration-300">
              <Link href={"#"} className="relative overflow-hidden z-10">
                <Image
                  src="/products/play-learn.png"
                  alt="Product Image"
                  width={460}
                  height={575}
                  className="w-full h-full object-cover relative z-0 backdrop-sepia group-hover:scale-[1.05] transition duration-700"
                />
              </Link>

            </div>
          </div>
        </div>

      </div> */}

      {/* Best Seller Section */}
      <div className="py-25 px-7.5">
        <div id="bestSeller">
          <h2 className="text-3xl text-center">Explore Our Best Sellers</h2>
          <BestSeller bestSellerData={bestSellerData} />
          <Link href={'/products'} className="text-center block mt-10 text-gray-700 text-md underline underline-offset-4 hover:text-orange-400">View All Best Sellers</Link>
        </div>
      </div>

      {/* Beds & DEcor Section */}
      <div className="py-25 px-7.5">
        <div className="w-full lg:w-2/3 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-7.5  items-center">

          <div>
            <div className="relative group w-full lg:w-[460px] h-[575] after:absolute after:w-24 lg:after:w-40 after:h-24 lg:after:h-40 after:bg-orange-100 after:-top-5 lg:after:-top-18 after:-left-4 lg:after:-left-18 after:rounded-full after:z-0 -rotate-3 hover:rotate-0 transition duration-300">
              <Link href={"#"} className="relative overflow-hidden z-10">
                <Image
                  src="/products/play-learn.png"
                  alt="Product Image"
                  width={460}
                  height={575}
                  className="w-full h-full object-cover relative z-0 backdrop-sepia group-hover:scale-[1.05] transition duration-700"
                />
              </Link>

            </div>
          </div>
          <div className="max-w-[300px]">
            <h2 className="text-3xl">Beds & Décor</h2>
            <p className="text-gray-600 mt-4.5">Add a touch of magic with charming wall art, rugs, lighting, and personalized decorations that make every child’s space feel special and inspiring</p>
          </div>
        </div>

      </div>

      <div className="p-5 bg-orange-100 w-full">
        <marquee className="text-orange-600 text-2xl">“The personalized décor made our son’s room extra special—amazing craftsmanship!” -  Linda</marquee>
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="relative overflow-hidden">
          <Link href={"#"} className="relative overflow-hidden group before:absolute before:border-l-2 before:border-r-2 before:border-l-black before:border-r-black before:h-full before:w-full before:left-2.5 before:right-2.5 before:bg-amber-50 z-10">
            <Image
              src="/products/vision.jpg"
              alt="Product Image"
              width={460}
              height={575}
              className="w-full h-full object-cover relative z-0 backdrop-sepia group-hover:scale-[1.05] transition duration-700"
            />
          </Link>
        </div>
        <div className="relative max-w-full lg:max-w-3/4 xl:max-w-1/2 px-7.5 lg:px-0">
          <h3 className="text-lg uppercase font-semibold">Vision Statement</h3>
          <h2 className="text-2xl lg:text-3xl mt-4.5">To create magical, safe, and inspiring spaces for children to grow, learn, and play—turning every room into a wonderland of creativity and comfort.</h2>
          <a href="/company/about-us" className="bg-orange-700 text-white py-3 px-6 mt-5 tracking-[1px] cursor-pointer border border-orange-700 hover:bg-transparent hover:text-orange-700">
            About Us
            </a>
        </div>
      </div>

      {/* <div className="grid grid-cols-2 gap-10 items-center">
        <div className="relative overflow-hidden">
          <Link href={"#"} className="relative overflow-hidden group before:absolute before:border-l-2 before:border-r-2 before:border-l-black before:border-r-black before:h-full before:w-full before:left-2.5 before:right-2.5 before:bg-amber-50 z-10">
            <Image
              src="/products/vision.jpg"
              alt="Product Image"
              width={460}
              height={575}
              className="w-full h-full object-cover relative z-0 backdrop-sepia group-hover:scale-[1.05] transition duration-700"
            />
          </Link>
        </div>
        <div className="relative max-w-1/2">
          <h3 className="text-lg uppercase font-semibold">Vision Statement</h3>
          <h2 className="text-3xl mt-4.5">To create magical, safe, and inspiring spaces for children to grow, learn, and play—turning every room into a wonderland of creativity and comfort.</h2>
          <button className="bg-orange-700 text-white py-3 px-6 mt-5 tracking-[2px] cursor-pointer border border-orange-700 hover:bg-transparent hover:text-orange-700">About Us</button>
        </div>
      </div> */}
    </>
  )
}
