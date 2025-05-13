'use client';

import Image from "next/image";
import { useRef } from "react";
import { Swiper as SwiperType } from "swiper/types"

const NFTCalendar = () => {
    const swiperRef = useRef<SwiperType | null>(null);

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
        <div className="bg-black-900 max-w-[1128px] w-full">
            <div className="w-full">
                <div className="flex items-center justify-between mb-2">
                    <h2 className="text-xl md:text-2xl font-black italic text-yellow-500">
                        NFT DROPS CALENDAR
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
                <div className="rounded-lg h-40 md:h-60">
                    <Image
                        src="/nft_calendar.png"
                        alt="NFT Calendar"
                        width={600}
                        height={240}
                        className="w-full h-full rounded-xl object-cover object-top"
                        priority
                    />
                </div>
            </div>
        </div>
    );
};

export default NFTCalendar;