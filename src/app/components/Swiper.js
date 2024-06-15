'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[500px] w-screen max-md:h-[245px]"
        style={{
          '--swiper-navigation-color': '#27AB61',
        }}
      >
        <SwiperSlide className="h-[500px] w-screen max-md:h-[240px]">
          <Image src={'/frontslide1.jpg'} alt="slideimg1" fill={true} />
        </SwiperSlide>
        <SwiperSlide className="h-[500px] w-screen max-md:h-[240px]">
          <Image src={'/frontslide2.png'} alt="slideimg2" fill={true} />
        </SwiperSlide>
        <SwiperSlide className="h-[500px] w-screen max-md:h-[240px]">
          <Image src={'/firstslide4.jpg'} fill={true} alt="slideimg3" />
        </SwiperSlide>
        <SwiperSlide className="h-[500px] w-screen max-md:h-[240px]">
          <Image src={'/frontslide5.jpg'} fill={true} alt="slideimg5" />
        </SwiperSlide>
        <SwiperSlide className="h-[500px] w-screen max-md:h-[240px]">
          <Image src={'/frontslide6.png'} fill={true} alt="slideimg6" />
        </SwiperSlide>
        <SwiperSlide className="h-[500px] w-screen max-md:h-[240px]">
          <Image src={'/frontslide8.png'} fill={true} alt="slideimg7" />
        </SwiperSlide>
        <SwiperSlide className="h-[500px] w-screen max-md:h-[240px]">
          <Image src={'/frontslide9.png'} fill={true} alt="slideimg8" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}