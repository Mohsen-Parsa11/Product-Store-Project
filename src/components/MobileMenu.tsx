"use client"
import React, {useState } from "react";
import Container from "./Container";
import { FiHeart } from "react-icons/fi";
import { IoMenuOutline } from "react-icons/io5";
import { AiOutlineHome, AiOutlineAppstore } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import Link from "next/link";
import { useShopingCartContext } from "./ShopingCartContext";
import { redirect } from "next/navigation";
import cookie from "js-cookie"


function MobileMenu() {

  const [mobileMenu, setMobileMenu] = useState("hidden")

  const handleOpenMobileMenu= ()=>{
    setMobileMenu("block")
  }
  
  const handleCloseMobileMenu= ()=>{
    setMobileMenu("hidden")
  }

  const handleLogin= ()=>{
    redirect("/login")
  }

  const handleLogout= ()=>{
    cookie.remove("token")
    redirect("/login")
  }

  const {totalProductQty}= useShopingCartContext();

  return (
    <div>
      <Container>
        {/* mobile menu */}
          <div className={`${mobileMenu} mobile bg-sky-900 fixed z-50 bottom-10 md:bottom-0 md:pt-5 lg:hidden top-0 px-10 opacity-75 left-0  text-white`}>
            <AiOutlineClose onClick={handleCloseMobileMenu} className=" absolute top-5 md:top-8 cursor-pointer right-4 text-xl"/>
            <div className="flex flex-col justify-center space-y-2 py-10 text-center">
              <Link href="/" className="relative">
                Home
              </Link>
              <div className="border-b border-gray-400 pb-1"></div>
              <Link href="#categories" className="relative">
                Categories
              </Link>
              <div className="border-b border-gray-400 pb-1"></div>

              <Link href="/store" className="relative">
                Store
              </Link>
              <div className="border-b border-gray-400 pb-1"></div>

              <Link href="#testimonials" className="relative">
                Testimonials
              </Link>
              <div className="border-b border-gray-400 pb-1"></div>

              <Link href="/dashboard" className="relative">
                Dashboard
              </Link>
              <div className="border-b border-gray-400 pb-1"></div>

              <Link href="/cart" className="relative">
                Cart
              </Link>
              <div className="border-b border-gray-400 pb-1"></div>

              <button onClick={handleLogin} className="bg-[#ff8f9c] px-5 mt-2 py-1 rounded mx-auto active:scale-98 shadow active:shadow-none cursor-pointer text-white">login</button>
              <div className="border-b border-gray-400 pb-1"></div>
              <button onClick={handleLogout} className="bg-rose-500 px-4 mt-2 py-1 rounded mx-auto active:scale-98 shadow active:shadow-none cursor-pointer text-white">logout</button>
            </div>
          </div>

          <div className="flex space-x-10 lg:hidden text-2xl fixed bottom-0 left-[50%] -translate-x-[50%] max-w-[500px] px-8 z-50 bg-white py-2">
            <IoMenuOutline onClick={handleOpenMobileMenu} className="cursor-pointer" />
            <Link href="/cart" className="relative">
              <CgShoppingCart className="cursor-pointer" />
              <p className="text-xs bg-red-500 text-white absolute top-0 left-4 h-4 w-4 rounded-full flex items-center justify-center">
                {totalProductQty}
              </p>
            </Link>
            <Link href="/">
              <AiOutlineHome className="cursor-pointer" />
            </Link>
            <div className="relative">
              <FiHeart className="cursor-pointer" />
              <p className="text-xs bg-red-500 text-white absolute top-0 left-3 h-4 w-4 rounded-full flex items-center justify-center">
                21
              </p>
            </div>
            <Link href="/dashboard">
              <AiOutlineAppstore className="cursor-pointer" />
            </Link>
          </div>
        
      </Container>
    </div>
  );
}

export default MobileMenu;
