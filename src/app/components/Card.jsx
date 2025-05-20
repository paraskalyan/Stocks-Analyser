"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { MdArrowUpward, MdArrowDownward } from "react-icons/md";
export default function Card({
  logo,
  symbol,
  corp,
  currentPrice,
  changeInPrice,
}) {
  const router = useRouter();
  const [data, setData] = useState({});

  const handleClick = () => {
    router.push(`/chart?symbol=${symbol}`);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=cn5jo4pr01qocjm1ujcgcn5jo4pr01qocjm1ujd0`
        );
        console.log(res.data);
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div
      onClick={handleClick}
      className="min-h-[120px] w-[200px] max-sm:w-full max-sm:bg-[#1f1f1f] cursor-pointer bg-[rgba(0,0,0,0.5)] backdrop-blur hover:bg-[rgba(0,0,0,0.8)]   text-white flex gap-4 flex-col justify-between  rounded-lg p-3"
    >
      <div className="flex gap-3">
        <img width={50} height={50} className="rounded-full" src={logo} />
        <div>
          <h1 className="text-left font-semibold">{symbol}</h1>
          <h6 className="text-left text-[14px] text-gray-300">{corp}</h6>
        </div>
      </div>
      <div>
        <p className="text-left">${data.c}</p>
        <p
          className={`${
            data.d > 0 ? "text-green-500" : "text-red-500"
          } text-[15px] flex items-center gap-1`}
        >
          <span className={`${data.d < 0 ? "rotate-180" : "rotate-0"}`}>
            <MdArrowUpward />
          </span>
          <span>{data.d}</span>
        </p>
      </div>
      <div className="max-sm:block absolute right-2 mt-8 hidden bg-[#000000] rounded-full p-2">
        <IoMdArrowForward size={23} />
      </div>
    </div>
  );
}
