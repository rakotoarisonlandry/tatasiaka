import React from "react";
import Auth from "./components/Auth";
import Image from "next/image";

function page() {
  return (
    <div className="flex    items-center justify-center min-h-screen p-12 space-x-40">
      <div className="w-[80%] flex justify-between rounded-2xl h-[80%] text-black p-2 bg-[white]">
        <div className="p-11">
          <div className="text-[#BB15CF] mb-5">
            <h2 className="font-semibold text-xl ">
              <span className="text-[30px]">.</span>
              <span className="text-black">tata</span>
              <span>siaka</span>
            </h2>
          </div>
          <div>
            <h1 className="font-bold text-4xl"> Get Started</h1>
            <Auth />
          </div>
        </div>
        <Image
          src="/login.png"
          width="500"
          height="800"
          className=" rounded-2xl"
          alt="logo"
        />
      </div>
    </div>
  );
}

export default page;
