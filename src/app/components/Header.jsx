import React from "react";
import { Poppins } from "next/font/google";
import Card from "./Card";
import { FaSearch } from "react-icons/fa";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Optional
});

export default function Header() {
  return (
    <div
      className={`${poppins.className} w-full relative min-h-screen bg-[#000000]   flex items-center flex-col justify-center`}
    >
      <img src="/bg.jpg" className=" absolute top-0  block max-sm:hidden" />
      <img
        src="/bg-mobile.jpg"
        className=" absolute top-0 opacity-80 max-sm:block hidden "
      />
      <div
        className={`flex flex-col max-sm:mt-[300px] z-10 relative px-20 max-sm:px-2 w-full  text-center items-start justify-center  min-h-[90vh] max-sm:h-full`}
      >
        <div className=" flex flex-col  items-center gap-4 w-[45%] max-sm:w-full max-sm:px-3 max-sm:py-10">
          <h1 className="  font-semibold text-left leading-tight  text-[3.5rem] max-sm:text-[2.6rem]">
            Get the edge on the market with precision
          </h1>
          <p className="text-white text-justify">
            We have worked for Wall Street Banks and know banks have a
            information edge over you. It's time to level the playing field
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-7 mt-10 max-sm:px-4">
          <Card
            logo="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/250px-Google_Favicon_2025.svg.png"
            symbol="GOOGL"
            corp="Alphabet Inc"
          />

          <Card
            logo="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg"
            symbol="AAPL"
            corp="Apple Inc"
          />
          <Card
            logo="https://static.vecteezy.com/system/resources/previews/027/127/473/non_2x/microsoft-logo-microsoft-icon-transparent-free-png.png"
            symbol="MSFT"
            corp="Microsoft Corp  "
          />
          {/* <Card
            logo="https://www.svgrepo.com/show/331599/tesla.svg"
            symbol="TSLA"
            corp="Tesla Inc"
          /> */}
          {/* <Card
            logo="https://seekvectors.com/files/download/Nvidia-02.png"
            symbol="NVDA"
            corp="NIVIDA Corp"
          /> */}
        </div>
      </div>
      <div className="my-[100px] max-sm:my-10 pt-[100px] max-sm:pt-10 max-sm:border-t max-sm:border-t-gray-600 relative flex flex-col items-center gap-5 px-5 max-sm:px-2">
        <h1 className="text-[5.5rem] max-sm:text-[3rem] leading-none m-0 font-semibold text-center">
          Where the world does
          <br />
          markets
        </h1>
        <h6 className="text-[1.2rem] max-sm:text-[1rem] text-center">
          Join 100 million traders and investors taking the future into their
          own hands.
        </h6>
        <video
          className="mt-10 border-2 border-purple-500  rounded-2xl shadow-lg shadow-purple-600 "
          width="90%"
          height="100%"
          autoPlay
          loop
        >
          <source
            src="https://static.tradingview.com/static/bundles/chart.c1cfe204b1c203ff7dd2.webm"
            type="video/webm"
          />
        </video>
      </div>
    </div>
  );
}
