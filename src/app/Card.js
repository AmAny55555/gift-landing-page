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
      className="rounded-xl bg-white p-6 w-[276px] h-[407px]  flex flex-col justify-between items-center"
    >
      <div className="w-[201px] h-[335px] flex justify-center items-center overflow-hidden">
        <Image src={props.src} width={201} height={335} alt="img" />
      </div>

   <p className="text-center  text-xs mt-2 flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap text-amber-300 hover:text-[#FF2A2A] transition-colors duration-300">
  View All <i className="fa-solid fa-angle-right transition-transform duration-300 hover:translate-x-1"></i>

</p>

    </div>
  );
}

export default Card;
