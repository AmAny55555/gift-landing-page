import React from 'react';
import Image from 'next/image';

function Card(props) {
  return (
    <div className="w-[200px] bg-white mt-7 p-3 ">
      <div className="flex justify-center">
        <Image src={props.src} width={150} height={120} alt="img" />
      </div>
      <p className="text-center mt-2 text-xs flex items-center justify-center gap-2 whitespace-nowrap text-black">
        View All <i className="fa-solid fa-angle-right"></i>
      </p>
    </div>
  );
}

export default Card;
