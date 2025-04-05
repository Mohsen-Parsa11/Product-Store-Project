import React, { useEffect, useState } from 'react'
import Image from "next/image";
import image from "../assets/image1.jpeg"
import AddToCart from "@/components/AddToCart";
import { Product } from '@/server-type/type';
import axios from 'axios';


interface CartItemsProps {
  id: number;
  qty: number;
}

function CartItems({id, qty}: CartItemsProps) {
    const [data, setData] = useState<Product>()
    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/${id}`).then((res)=>{
            setData(res.data)
        })
    })
      
  return (
    <div>
        <div className="shadow-md border border-gray-300 my-8 rounded grid grid-cols-1 md:grid-cols-12">
          <div className="col-span-3 pl-10 py-5">
            <img src={data?.thumbnail} alt="image" className="w-40 h-40"/>
            <AddToCart id={id} />
          </div>
          <div className="col-span-8 pr-4">
            <div className="py-10">
              <p className="text-gray-600 text-3xl"><span className='font-bold'>Title</span>: {data?.title}</p>
              <p className="text-gray-500 line-clamp-3 my-2"><span className='font-bold'>Description</span>: {data?.description}</p>
              <p className="text-gray-400 text-lg"><span className='font-bold'>Rating</span>: {data?.rating}</p>
              <p className="text-gray-400 text-lg"><span className='font-bold'>Price</span>: {data?.price}</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CartItems