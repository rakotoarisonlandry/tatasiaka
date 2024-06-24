import React from "react";
import Auth from "./components/Auth";
import Image from "next/image";

function page() {
  return (
    <div className="flex  items-center justify-center overflow-y-hidden min-h-screen p-10 space-x-32  ">
      <div className="w-[80%] flex justify-between rounded-2xl h-[70%] text-black p-5 bg-[white]">
        <div className="p-9 w-[40%]">
          <div className="text-[#BB15CF] mb-5">
            <h2 className="font-semibold text-xl ">
              <span className="text-[30px]">.</span>
              <span className="text-black">tata</span>
              <span>siaka</span>
            </h2>
          </div>
          <div>
            <h1 className="font-bold text-4xl mb-10"> Get Started</h1>
            <Auth />
          </div>
        </div>
        <Image
          src=""
          width="500"
          height="500"
          className=" rounded-2xl"
          alt="logo"
        />
      </div>
    </div>
  );
}

export default page;
