"use client";
import React from "react";
import Container from "@/components/Container";
import { useShopingCartContext } from "@/components/ShopingCartContext";
import CartItems from "@/components/CartItems";

function Cart() {
  const {cartItems}=  useShopingCartContext()
  return (
    <div>
      <Container>
        <div>
          {
            cartItems.map(item=>(
              <CartItems key={item.id} {...item} />
            ))
          }
        </div>
      </Container>
    </div>
  );
}

export default Cart;
