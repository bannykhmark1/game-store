import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import Image from "next/image";
import madMax from "../img/madmax.jpeg";
import mk from "../img/mk11.jpg";
import ss from "../img/ss.jpg";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export default function Offers() {
  return (
    <>
      <div className="relative">
        <div className="absolute w-screen bg-neutral-900 pt-6 pb-14 px-40">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false,
            // }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className=""
          >
            <SwiperSlide className=" h-auto pb-16">
              <div className="flex justify-center">
                <div className="img-slider-first"></div>
                <div>
                  <div className="img-slider-second"></div>
                  <div className="img-slider-third"></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
