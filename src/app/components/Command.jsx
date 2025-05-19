"use client";
import React, { useEffect, useState } from "react";
import debounce from "lodash.debounce";
import { IoMdCloseCircle, IoMdSearch } from "react-icons/io";
import axios from "axios";
import { Command } from "cmdk";
import { useRouter } from "next/navigation";

export default function CommandBox() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [commandMenu, setCommandMenu] = useState(false);
  const router = useRouter();

  const API_KEY = "SD75SY6C5VJ3H4S5";

  const goToChart = (symbol) => {
    console.log("runnnn");
    router.push(`/chart?symbol=${symbol}`);
  };

  const handleFocus = () => {
    setCommandMenu(true);
    document.body.style.overflow = "hidden";
  };

  const searchSymbol = async (keyword) => {
    if (!keyword) {
      setResults([]);
      return;
    }

    try {
      const res = await axios.get("https://www.alphavantage.co/query", {
        params: {
          function: "SYMBOL_SEARCH",
          keywords: keyword,
          apikey: API_KEY,
        },
      });

      if (res.data) {
        const matches = res.data.bestMatches;
        const enrichedMatches = await Promise.all(
          matches.map(async (item) => {
            const symbol = item["1. symbol"];
            try {
              const logoRes = await axios.get(
                `https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=cn5jo4pr01qocjm1ujcgcn5jo4pr01qocjm1ujd0`
              );
              return {
                ...item,
                logo: logoRes.data.logo || null,
              };
            } catch (err) {
              console.log(err);
              return {
                ...item,
                logo: "null",
              };
            }
          })
        );
        console.log(enrichedMatches);
        setResults(enrichedMatches);
      }
    } catch (err) {
      console.error("Search error:", err);
      setResults([]);
    }
  };

  const debouncedSearch = debounce(searchSymbol, 500);

  useEffect(() => {
    debouncedSearch(query);
    return debouncedSearch.cancel;
  }, [query]);

  return (
    <div className=" ">
      <div className=" bg-white flex items-center gap-4  rounded-full px-3 py-2">
        <IoMdSearch color="gray" size="20px" />
        <input
          onFocus={handleFocus}
          className=" outline-none text-gray-500"
          placeholder="Symbol or Company"
        />
      </div>
      {commandMenu && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* 🔹 Blur Background Overlay */}

          <div className="absolute inset-0 backdrop-blur-sm bg-black/30 transition-opacity duration-300 opacity-100" />
          {/* 🔹 Modal Content */}
          <div className="h-[600px] border relative  overflow-y-scroll custom-scrollbar border-gray-800 w-[800px] rounded-xl z-10 bg-[#1d1d20]">
            <button
              onClick={() => {
                setCommandMenu(false);
                setQuery("");
                setResults([]);
                document.body.style.overflow = "";
              }}
              className=" cursor-pointer self-start absolute right-0 z-10"
            >
              <IoMdCloseCircle size={50} />
            </button>
            <input
              placeholder="Symbol or name"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-black p-3 border-b border-b-gray-500 outline-none rounded-tr-xl rounded-tl-xl"
            />
            {/* <div className="p-3 flex justify-between">
              <div className="flex gap-3">
                <p className="font-semibold">MSFT</p>
                <p className="text-[0.9rem]">Microsoft</p>
              </div>
              <button className="bg-gray-100 text-black p-1 px-2 rounded-lg hover:bg-gray-300">
                Launch Chart
              </button>
            </div> */}

            {results.map((item, key) => {
              return (
                <div
                  key={item["1. symbol"]}
                  className="p-3 flex hover:bg-gray-900 justify-between items-center overflow-hidden"
                >
                  <div className="flex gap-3">
                    <img src={item.logo} width={30} className="rounded-full" />
                    <p className="font-semibold">{item["1. symbol"]}</p>
                    <p className="text-[0.9rem]">{item["2. name"]}</p>
                  </div>
                  <button
                    onClick={() => goToChart(item["1. symbol"])}
                    className="bg-gray-100 text-black p-1 px-2 rounded-lg hover:bg-gray-300"
                  >
                    Launch Chart
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
