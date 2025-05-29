import React from "react";
import Image from "next/image";

function Card(props) {
  return (
    <div className="rounded-xl bg-white shadow-md w-full p-6 h-[407px] lg:h-[370px]">
      <div className="w-full h-[335px] lg:h-[300px] relative">
        <Image src={props.src} fill alt="img" />
      </div>
      <p className="text-center mt-2 text-xs flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap text-black  hover:text-yellow-500">
        View All <i className="fa-solid fa-angle-right"></i>
      </p>
    </div>
  );
}

function Section() {
  return (
    <div className=" sm:p-3 md:p-10 mt-10">
      <p className="font-poppins font-medium px-5 whitespace-nowrap text-base sm:text-lg md:text-2xl mb-5">
        Make Gifting as{" "}
        <span className="text-[#FF2A2A] text-sm sm:text-xs md:text-lg font-press align-baseline">
          Fun as Building
        </span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
        <Card src={"/z.png"} />
        <Card src={"/zz.png"} />
        <Card src={"/zzz.png"} />
        <Card src={"/zzzz.png"} />
      </div>
    </div>
  );
}

export default Section;
