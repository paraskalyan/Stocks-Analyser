import React from "react";
import Command from "./Command";
export default function Navbar() {
  return (
    <div className="w-full flex bg-black h-[8vh] py-8 text-white items-center justify-between px-10 max-sm:px-3 ">
      <div>
        <img width={200} className="max-sm:w-[150px]" src="/logo-main.png" />
      </div>
      <div className="flex gap-10 text-[1rem] text-gray-200 max-sm:hidden">
        <h5>TrendsAI</h5>
        <h5>Features</h5>
        <h5>Pricing</h5>
        <h5>FAQ</h5>
      </div>

      <Command />
    </div>
  );
}
