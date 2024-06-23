import Image from "next/image";
import React from "react";

const HeaderContent = () => {
  return (
    <div className="flex flex-col space-y-20">
      <div className="">
        <Image
          src="/SMS.png"
          width="600"
          height="600"
          alt="header illusatraion"
          className=""
        />
      </div>

      <span className="absolute ">
        <Image
          src="/cloud.png"
          width="100"
          height="100"
          alt="header illusatraion"
        />
      </span>
      <div className=" absolute right-16 justify-around ">
        <h1 className="text-xl font-semibold w-52">
          fast,reliable and <span className="text-[#BB15CF]">secure</span>{" "}
          messenger
        </h1>
      </div>
      <div className=" absolute left-16 top-80 justify-around ">
        <h4 className="uppercase font-semibold text-sm">
          The best app for your productivity
        </h4>
        <h1 className="text-5xl font-semibold w-[45%]">
          Connect with <span className="text-[#BB15CF]">your Friend</span>{" "}
          easily
        </h1>
      </div>
    </div>
  );
};

export default HeaderContent;
