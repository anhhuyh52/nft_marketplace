"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";

const NFTCollections = () => {
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);

  // Sample NFT collection data - replace with your actual data
  const collections = [
    {
      id: 1,
      image: "/nfts/nft_1.png",
      title: "Vaporwave Portrait",
      artist: "CyberArtist",
    },
    {
      id: 2,
      image: "/nfts/nft_2.png",
      title: "Pink Sculpture",
      artist: "NeonDreamer",
    },
    {
      id: 3,
      image: "/nfts/nft_3.png",
      title: "Retro Head",
      artist: "PixelMaster",
    },
    {
      id: 4,
      image: "/nfts/nft_4.png",
      title: "Digital Future",
      artist: "3DCreator",
    },
    {
      id: 5,
      image: "/nfts/nft_5.png",
      title: "Ancient Modern",
      artist: "ArtificialMind",
    },
    {
      id: 6,
      image: "/nfts/nft_6.png",
      title: "Crystal Dimension",
      artist: "MetaWorld",
    },
  ];

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Navigate through collections
  const nextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const prevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <section className="bg-black-900 max-w-[1128px] w-full">
      <div className="w-full">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-black italic text-yellow-500 md:text-2xl">
            NEW NFT COLLECTIONS
          </h2>
          <div className="flex space-x-2">
            <button
              onClick={prevSlide}
              className="w-10 h-10 p-1 cursor-pointer rounded-xl flex items-center justify-center bg-gray-800 hover:bg-gray-700"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 p-1 rounded-xl flex items-center cursor-pointer justify-center bg-gray-800 hover:bg-gray-700"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={16}
            className="mySwiper w-16/12 md:w-full"
            breakpoints={{
              0: {
                slidesPerView: 4,
                spaceBetween: 8,
              },
              480: {
                slidesPerView: 4,
                spaceBetween: 8,
              },
              640: {
                slidesPerView: 6,
              },
              768: {
                slidesPerView: 6,
              },
              1024: {
                slidesPerView: 6,
              },
            }}
          >
            {collections.map((collection) => (
              <SwiperSlide key={collection.id}>
              <div
                style={{
                  width: isMobile ? '102px' : "180px",
                  height: isMobile ? '140px' : "245px",
                  borderRadius: "12px",
                  background: `url(${collection.image}) center center / cover no-repeat`,
                  backgroundOrigin: "center"
                }}
              />
            </SwiperSlide>
            
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default NFTCollections;
