import Image, { StaticImageData } from "next/image";
import React from "react";
Image;

interface ISlideData {
  id: number;
  image: StaticImageData;
  title: string;
  header: string;
  priceTitle: string;
  price: number;
}

function Slide({image,header,price,priceTitle,title}:ISlideData) {
  return (
    <div>
      <div className=" absolute bottom-3 md:bottom-15 lg:bottom-20 space-y-1 lg:space-y-4 px-5">
        <h3 className="lg:text-2xl text-[#ff8f9c] capitalize font-semibold">
          {title}
        </h3>
        <h3 className="text-lg leading-5 lg:leading-10 md:text-2xl md:leading-7 lg:text-4xl text-slate-800 font-bold max-w-80 uppercase tracking-wide">
          {header}
        </h3>
        <h3 className="text-xs md:text-[16px] text-gray-400 font-semibold">
        {priceTitle} <b className="text-slate-600">${price}</b>
        </h3>
        <button className="bg-[#ff8f9c] mt-3 text-xs md:text-[16px] px-2 py-1 rounded shadow active:scale-98 cursor-pointer text-white">
          shop now
        </button>
      </div>
      <Image
        src={image}
        alt="image1"
        className="h-40 md:h-75 lg:h-100 w-full object-cover"
      />
    </div>
  );
}

export default Slide;
