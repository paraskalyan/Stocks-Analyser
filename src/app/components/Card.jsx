"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
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
      className="h-[200px] w-[200px] cursor-pointer bg-black  hover:backdrop-blur-xl  shadow-sm shadow-[#c4c4c4]  text-white flex flex-col justify-between  rounded-lg p-3"
    >
      <div className="flex gap-3">
        <img width={50} height={50} className="rounded-full" src={logo} />
        <div>
          <h1 className="font-semibold">{symbol}</h1>
          <h6 className="text-[14px] text-gray-300">{corp}</h6>
        </div>
      </div>
      <div>
        <p>${data.c}</p>
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
    </div>
  );
}
