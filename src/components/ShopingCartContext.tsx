"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { MdProductionQuantityLimits } from "react-icons/md";
import { json } from "stream/consumers";

type TShopingCartContextProvider = {
  children: React.ReactNode;
};
interface cartItems {
  id: number;
  qty: number;
}

type TShopingCartContext = {
  cartItems: cartItems[];
  handleIncreaseProductQty: (id: number) => void;
  handleDecreaseProductQty: (id: number) => void;
  productQty: (id: number) => number;
  handleRemoveProductQty: (id:number)=> void;
  totalProductQty: number;
};

const ShopingCartContext = createContext({} as TShopingCartContext);

// this function is a config, shorthand for using context
export const useShopingCartContext = () => {
  return useContext(ShopingCartContext);
};

export function ShopingCartContextProvider({
  children,
}: TShopingCartContextProvider) {

  const [cartItems, setCartItems] = useState<cartItems[]>([]);

  // this function handle increasing product quatitiy
  const handleIncreaseProductQty = (id: number) => {
    setCartItems((currentItems) => {
      const isProductNotExist =
        currentItems.find((item) => item.id == id) == null;
      if (isProductNotExist) {
        return [...currentItems, { id: id, qty: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id == id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  // this function handle decrease product quatitiy
  const handleDecreaseProductQty = (id: number) => {
    setCartItems((currentItems) => {
      const isLastOne = currentItems.find((item) => item.id == id)?.qty == 1;
      if (isLastOne) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id == id) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };


  // this function calculate product quatitiy that how many product does user choosed
  const productQty = (id: number) => {
    return cartItems.find((item) => item.id == id)?.qty || 0;
  };

  /* this function sum total product quantity and 
   show it at the top of header on cart icon */
  const totalProductQty = cartItems.reduce((total,item)=>{
    return total + item.qty;
  },0)

  // this function remove selected product from list
  const handleRemoveProductQty= (id:number)=>{
    setCartItems(currentItems=>{
      return currentItems.filter(item=>item.id !=id);
    })
  }

  // this tow useEffect store cart items(id,qty) and prevent to remove by refresh
  useEffect(()=>{
   const storedCartData= localStorage.getItem("cartItems")
   if(storedCartData){
    setCartItems(JSON.parse(storedCartData))
   }
  },[])

  useEffect(()=>{
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  },[cartItems])
  


  return (
    <ShopingCartContext.Provider
      value={{
        cartItems,
        handleIncreaseProductQty,
        handleDecreaseProductQty,
        productQty,
        handleRemoveProductQty,
        totalProductQty
      }}
    >
      {children}
    </ShopingCartContext.Provider>
  );
}
