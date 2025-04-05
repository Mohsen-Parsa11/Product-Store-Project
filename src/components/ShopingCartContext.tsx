"use client";
import React, { createContext, useContext, useState } from "react";

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

export const useShopingCartContext = () => {
  return useContext(ShopingCartContext);
};

export function ShopingCartContextProvider({
  children,
}: TShopingCartContextProvider) {
  const [cartItems, setCartItems] = useState<cartItems[]>([]);

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

  const productQty = (id: number) => {
    return cartItems.find((item) => item.id == id)?.qty || 0;
  };

  const totalProductQty = cartItems.reduce((total,item)=>{
    return total + item.qty;
  },0)
  const handleRemoveProductQty= (id:number)=>{
    setCartItems(currentItems=>{
      return currentItems.filter(item=>item.id !=id);
    })
  }
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
