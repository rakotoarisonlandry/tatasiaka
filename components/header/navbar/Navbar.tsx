"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  return (
    <div className="flex fixed w-full top-0 justify-between px-[5%] backdrop-filter backdrop-blur-lg bg-opacity-30  py-4 items-center ">
      <div className="flex items-center  space-x-3 text-[#BB15CF]">
        <div>
          <h2 className="font-semibold text-xl ">
            <span className="text-[30px]">.</span>
            <span className="text-white">tata</span>
            <span>siaka</span>
          </h2>
        </div>
      </div>
      <div className="flex space-x-9 font-semibold">
        <Link
          className={`link ${
            pathname === "/" ? "text-[#BB15CF] font-semibold" : ""
          }`}
          href="/"
        >
          Product
        </Link>
        <Link href={""}>Princing</Link>
        <Link href={""}>Downloads</Link>
        <Link href={""}>Contacts</Link>
      </div>
      <div className="flex space-x-7">
        <button className="px-6 py-2 border scale-x-105 hover:scale-y-105 transition duration-300 hover:bg-[#1E1E1E] border-[#1E1E1E] hover:border-[#1E1E1E] bg-transparent rounded-full">
          Login
        </button>
        <button className="px-6 py-2 border border-[#1E1E1E] hover:border-[#1E1E1E] hover:bg-transparent active:bg-[#1E1E1E] bg-[#1E1E1E] rounded-full">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default NavBar;
