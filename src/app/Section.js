import React from 'react';
import Image from 'next/image';

function Card(props) {
  return (
 <div
  style={{
    boxShadow: `
      0px 7px 15px 0px #0000000A,
      0px 26px 26px 0px #00000008,
      0px 60px 36px 0px #00000005,
      0px 106px 42px 0px #00000003,
      0px 165px 46px 0px #00000000
    `
  }}
  className="rounded-xl bg-white p-6 w-[250px] h-[407px] lg:w-[220px] lg:h-[370px] mx-auto"
>
  <div className="flex justify-center items-center w-full h-[335px] lg:h-[300px]">
    <Image src={props.src} width={201} height={335} alt="img" />
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
<p className="font-poppins font-medium  px-5 whitespace-nowrap text-base sm:text-lg md:text-2xl mb-5">
  Make Gifting as
  <span className="text-[#FF2A2A] text-sm sm:text-xs md:text-lg font-press align-baseline"> Fun as Building</span>
</p>


<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center lg:p-10 mt-3">

        <Card src={"/z.png"} />
        <Card src={"/zz.png"} />
        <Card src={"/zzz.png"} />
        <Card src={"/zzzz.png"} />
      </div>
    </div>
  );
}

export default Section;
