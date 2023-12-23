"use client"

import React from "react";
import { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

import ServeSteps from "./ServeSteps";
import map1 from "../../public/assets/Map1.png";
import Fast from "../../public/assets/Fast food.png";
import scooter from "../../public/assets/Scooter.png";

export default function HomeServe() {
  return (
    <div>
      <div className="md:hidden">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <ServeSteps
              imgSrc={map1}
              head="Tell us where you are"
              desc="Select the location you want us to deliver."
            />
          </SwiperSlide>
          <SwiperSlide>
            <ServeSteps
              imgSrc={Fast}
              head="Tell us what you want"
              desc="Browse the type of food that interest you."
            />
          </SwiperSlide>
          <SwiperSlide>
            <ServeSteps
              imgSrc={scooter}
              head="We'll come running"
              desc="Your order will be delivered to you in no time."
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="hidden w-full md:flex justify-between">
        <ServeSteps
          imgSrc={map1}
          head="Tell us where you are"
          desc="Select the location you want us to deliver."
        />

        <ServeSteps
          imgSrc={Fast}
          head="Tell us what you want"
          desc="Browse the type of food that interest you."
        />

        <ServeSteps
          imgSrc={scooter}
          head="We'll come running"
          desc="Your order will be delivered to you in no time."
        />

      </div>
      <div className="mt-[30px] border-b-4 border-white w-full"></div>
    </div>
  );
}
