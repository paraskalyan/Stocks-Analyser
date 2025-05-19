import React from "react";
import Command from "./Command";
export default function Navbar() {
  return (
    <div className="w-full flex bg-black h-[8vh] text-white items-center justify-between px-6">
      <div>
        <img width={200} src="/logo-main.png" />
      </div>
      <div className="flex gap-10 text-[1rem] text-gray-200">
        <h5>TrendsAI</h5>
        <h5>Features</h5>
        <h5>Pricing</h5>
        <h5>FAQ</h5>
      </div>
      <div></div>
      <Command />
    </div>
  );
}
