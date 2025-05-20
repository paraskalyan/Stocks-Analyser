import Link from "next/link";
import React from "react";
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";

export default function Footer() {
  return (
    <div className="min-h-[25vh] bg-[#080808]  py-8 text-white  flex flex-col-reverse items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        {/* <h3 className="font-bold">Follow the developer</h3> */}
        <div className="flex gap-6">
          <Link href="">
            <IoLogoLinkedin size={30} color="#0077B5" />
          </Link>
          <Link href="https://x.com/paras_eth">
            <IoLogoTwitter size={30} color="#1DA1F2" />
          </Link>
          <Link href="https://github.com/paraskalyan">
            <IoLogoGithub size={30} />
          </Link>
        </div>
      </div>
      <h1 className="uppercase font-semibold text-[10vh] max-sm:hidden">
        See the signal. skip the noise
      </h1>
      <div className=" w-full mb-3 px-3 flex flex-col items-center">
        <img width={200} src="/logo-main.png" />
        <h1 className={`font-medium text-[1rem] max-sm:block hidden`}>
          See the signal. Skip the noise
        </h1>
      </div>
    </div>
  );
}
