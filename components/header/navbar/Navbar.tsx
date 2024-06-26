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
          Home
        </Link>
        <Link href={""}>About</Link>
        <Link href={""}>Downloads</Link>
        <Link href={""}>Contacts</Link>
      </div>
      <div className="flex space-x-7">
        <Link href="/auth">
          <button className="px-6 py-2 border border-[#1E1E1E] hover:border-[#1E1E1E] hover:bg-transparent active:bg-[#1E1E1E] bg-[#1E1E1E] rounded-full">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
