"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Banner = () => {
  return (
    <>
      <div className="container">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 300000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          //   navigation={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="container md:pt-20 md:pb-10">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <h1 className="text-8xl font-bold py-4">
                    Alowishus Delicious Coffe{" "}
                  </h1>
                  <div className="absolute top-56 right-56 mt-1">
                    <Image src="/assets/cafe.png" width={80} height={80} />
                  </div>
                  <p className="py-4">
                    A drink from the "My Alowishus" bottled brews range OR grap
                    one of our delicious coffe's.{" "}
                  </p>
                  <div className="flex gap-4 py-6">
                    <Button className="p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide">
                      Download App
                    </Button>
                    <Button
                      className="p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide"
                      variant="outline"
                    >
                      Shop Coffe
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <Image src="/assets/hero1.png" width={600} height={600} />
                  <div className="absolute top-10 right-0 mt-1">
                    <Image src="/assets/cafe.png" width={120} height={120} />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide> */}
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
