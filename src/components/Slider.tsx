"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Container from "./Container";
import Slide from "./Slide";
import { slideData } from "@/data/SlideData";

export default function App() {
  return (
    <Container>
      <Swiper
        autoplay={{delay:2000}}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        
          {
            slideData.map(item=>(
            <SwiperSlide key={item.id}>
             <Slide  {...item}  />
            </SwiperSlide>
            ))
          }
        
      </Swiper>
    </Container>
  );
}
