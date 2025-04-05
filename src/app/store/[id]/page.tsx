import Container from "@/components/Container";
import React from "react";
import AddToCart from "@/components/AddToCart";
import { Product } from "@/server-type/type";

interface Iprops{
  params: Promise<{id:string}>
  searchParams: Promise<{}>
}

async function ProductItem({params}:Iprops) {   

  const {id}= await params
  const result = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await result.json() as Product;


  return (
    <div>
      <Container>
        <div className="w-full py-4 my-5 shadow border border-gray-300 px-3 lg:px-10 flex flex-col md:flex-row">
          <img src={data?.thumbnail} alt="image" className="h-60 w-60 " />
          <div className="py-10 lg:px-10">
          <p className="text-gray-600 text-2xl line-clamp-1"><span className="font-bold">Title</span>: {data?.title}</p>
          <p className="text-gray-500 line-clamp-3 my-1 "><span className="font-bold">Description</span>: {data?.description}</p>
          <p className="text-gray-400 text-lg"><span className="font-bold">Rating</span>: {data?.rating}</p>
          <p className="text-gray-400 text-lg"><span className="font-bold">Price</span>: ${data?.price}</p>
          <AddToCart id={parseInt(id)} />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ProductItem;
