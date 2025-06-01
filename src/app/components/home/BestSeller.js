"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProductComp from '../productcomp/ProductComp';




export default function BestSeller(props) {
  const { bestSellerData } = props;
  console.log("best sellere data", bestSellerData);



  return (
    <>
      <div className='mt-10'>
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {bestSellerData.map((item) => (
            <SwiperSlide key={item.id}>
              <ProductComp
                prodName={item.title}
                prodPrice={item.price}
                prodImage={item.images}
                prodHoverImage={item.images}
                rating={item.rating}
                id={item.id}
                 />
            </SwiperSlide>
          ))}


        </Swiper>
      </div>
      {/* <div className='grid grid-cols-4 gap-7.5 mt-10'>
                {bestSellerData.map((item) => (
                    <Product key={item.id} prodName={item.name} prodPrice={item.price} prodImage={item.image} prodHoverImage={item.hoverImage} />
                ))}
            </div> */}



    </>
  )
}
