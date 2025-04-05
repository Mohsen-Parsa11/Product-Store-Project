import React from "react";
import Container from "./Container";
import Image, { StaticImageData } from "next/image";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

interface productType {
  id: number;
  image: StaticImageData;
  title: string;
  describtion: string;
  rating: number;
  price: number;
}

function Product({ title, describtion, price, rating, image }: productType) {
    const generatRating= (rating:number)=>{
        switch (rating) {
    case 1:
      return (
        <div className="flex">
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
      );
      break;
    case 2:
      return (
        <div className="flex">
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
      );
      break;
    case 3:
      return (
        <div className="flex">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
      );
      break;
    case 4:
      return (
        <div className="flex">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </div>
      );
      break;
    case 5:
      return (
        <div className="flex">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
      );
      break;

    default:
      return null;
  }
    }
  

  return (
    <div>
        <div className="rounded-lg py-4 px-3 shadow">
          <Image
            src={image}
            width={100}
            height={100}
            alt="coat"
            className="w-fit overflow-hidden object-cover h-40"
          />
          <div className="space-y-1">
            <h2 className="text-[#ff8f9c] text-lg ">{title}</h2>
            <p className="capitalize text-gray-400 w-40">{describtion}</p>
            <div className="flex text-amber-400">
              {generatRating(rating)}
            </div>
            <div className="flex space-x-2">
              <b>${price}</b>
              <del className="text-gray-400">${price + 50}</del>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Product;
