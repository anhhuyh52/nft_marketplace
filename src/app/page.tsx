"use client";

import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Slider from "../components/Slider";
import NFTCollections from "../components/NFTCollections";
import Footer from "../components/Footer";
import FeatureNav from "@/components/FeatureNav";
import NFTCalendar from "@/components/NFTCalendar";

const sliderData = [
  {
    id: 1,
    title: "ARE AWESOME",
    tagline: "NEXTJS 13 & SWIPER SLIDER",
    image: "/slider.png",
    buttons: [
      {
        id: 1,
        text: "Roberto Nickson",
        link: "https://www.pexels.com/@rpnickson/",
        type: "btn-dark btn-circle",
      },
    ],
  },
  {
    id: 2,
    title: "GIVE IT A SHOOT",
    tagline: "IF YOU LIKE IT",
    image: "/slider.png",
    buttons: [
      {
        id: 1,
        text: "Julia M Cameron",
        link: "https://www.pexels.com/@julia-m-cameron/",
        type: "btn-dark btn-circle",
      },
    ],
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>NFTech - NFT Marketplace</title>
        <meta
          name="description"
          content="Discover, collect, and sell extraordinary NFTs"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-900 text-white">
        <Header />
        <Slider data={sliderData} />
        <FeatureNav />
        
        <section className="px-5 flex flex-col items-center justify-center py-10 md:py-20 bg-black-900">
          <NFTCollections />
          <div className="w-full flex flex-col md:flex-row items-baseline justify-center gap-5 max-w-[1128px] mt-20">
            <NFTCalendar />
            <div className="flex items-baseline gap-6 h-full">
              <article>
                <h2 className="text-xl md:text-2xl font-bold text-yellow-500 mb-2">
                  HOT NFT
                </h2>
                <div className="h-40 md:h-60">
                  <Image
                    src="/hot_nft.png"
                    alt="Hot NFT Featured Item"
                    height={240}
                    width={240}
                    className="w-full h-full rounded-xl object-cover"
                  />
                </div>
              </article>
              
              <article>
                <h2 className="text-xl md:text-2xl font-bold text-yellow-500 mb-2">
                  PROMOTION
                </h2>
                <div className="h-40 md:h-60">
                  <Image
                    src="/promotion.png"
                    alt="NFT Promotion"
                    height={240}
                    width={240}
                    className="w-full h-full rounded-xl object-cover"
                  />
                </div>
              </article>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
