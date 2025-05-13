"use client";

import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Slide {
  id: number;
  title: string;
  tagline: string;
  image: string;
  buttons: ButtonProps[];
}

interface ButtonProps {
  id: number;
  text: string;
  link: string;
  type: string;
}

interface DemoSliderProps {
  data: Slide[];
}

const Slider: React.FC<DemoSliderProps> = ({ data }) => (
  <section className="w-full">
    <div className="h-auto">
      <ul className="md:h-[450px] w-full h-[180px]">
        <Swiper
          pagination={{ type: "bullets", clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          modules={[Autoplay, Navigation, Pagination]}
          className="w-full h-full"
        >
          {data.map(({ id, image }) => (
            <SwiperSlide key={id}>
              <div
                className="h-full w-full absolute left-0 top-0"
                style={{
                  background: `url(${image}) center center / cover no-repeat`,
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>
    </div>
  </section>
);

export default Slider;
