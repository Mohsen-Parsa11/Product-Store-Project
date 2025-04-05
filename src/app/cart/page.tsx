import Container from "@/components/Container";
import Image from "next/image";
import React from "react";
import image from "../../assets/image1.jpeg"
import AddToCart from "@/components/AddToCart";

function Cart() {
  return (
    <div>
      <Container>
        <div className="shadow-md border border-gray-300 my-8 rounded grid grid-cols-1 md:grid-cols-12">
          <div className="col-span-3 pl-10 py-5">
            <Image src={image} alt="image" className="w-40 h-40"/>
            <AddToCart id={"2"} />
          </div>
          <div className="col-span-8 pr-4">
            <div className="py-10">
              <p className="text-gray-600 text-3xl">products item</p>
              <p className="text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur sint nulla cupiditate nisi tenetur, optio ullam ipsam illum veritatis consectetur nostrum totam quae repellat excepturi ipsa, commodi velit possimus accusamus!</p>
              <p className="text-gray-400 text-lg">likes 4</p>
              <p className="text-gray-400 text-lg">price 40$</p>
            </div>
          </div>
        </div>
        <div className="shadow-md border border-gray-300 my-8 rounded grid grid-cols-1 md:grid-cols-12">
          <div className="col-span-3 pl-10 py-5">
            <Image src={image} alt="image" className="w-40 h-40"/>
            <AddToCart id={"2"} />
          </div>
          <div className="col-span-8 pr-4">
            <div className="py-10">
              <p className="text-gray-600 text-3xl">products item</p>
              <p className="text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur sint nulla cupiditate nisi tenetur, optio ullam ipsam illum veritatis consectetur nostrum totam quae repellat excepturi ipsa, commodi velit possimus accusamus!</p>
              <p className="text-gray-400 text-lg">likes 4</p>
              <p className="text-gray-400 text-lg">price 40$</p>
            </div>
          </div>
        </div>
        <div className="shadow-md border border-gray-300 my-8 rounded grid grid-cols-1 md:grid-cols-12">
          <div className="col-span-3 pl-10 py-5">
            <Image src={image} alt="image" className="w-40 h-40"/>
            <AddToCart id={"2"} />
          </div>
          <div className="col-span-8 pr-4">
            <div className="py-10">
              <p className="text-gray-600 text-3xl">products item</p>
              <p className="text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur sint nulla cupiditate nisi tenetur, optio ullam ipsam illum veritatis consectetur nostrum totam quae repellat excepturi ipsa, commodi velit possimus accusamus!</p>
              <p className="text-gray-400 text-lg">likes 4</p>
              <p className="text-gray-400 text-lg">price 40$</p>
            </div>
          </div>
        </div>
       
      </Container>
    </div>
  );
}

export default Cart;
