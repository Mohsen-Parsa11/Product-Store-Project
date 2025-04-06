"use client";
import React, { useState } from "react";
import Container from "./Container";
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { CgShoppingCart } from "react-icons/cg";
import logo from "../assets/logo.webp";
import Link from "next/link";
import Image from "next/image";
import { useShopingCartContext } from "./ShopingCartContext";
import { useRouter } from "next/navigation";

function Header() {
  const { totalProductQty } = useShopingCartContext();
  const [searchedData, setSearchrdData] = useState("");
  const router = useRouter();
  const handleSearchProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchrdData(e.target.value);
  };
  const Search = () => {
    router.push(searchedData);
  };

  return (
    <div>
      <div className="border-b border-gray-200 py-4 mb-4">
        <Container>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 justify-center lg:justify-between">
            <div className="text-2xl font-bold text-slate-700">
              <Image src={logo} alt="logo" className="w-24" />
            </div>

            <div className="flex justify-between border-2 border-gray-200 md:ml-10 lg:mr-10 hover:border-gray-800 items-center py-1 px-3 w-full rounded-md ">
              <input
                type="text"
                onChange={(e) => handleSearchProduct(e)}
                name="search"
                placeholder="Enter your product name here..."
                className="border-0 outline-none w-full"
              />
              <BsSearch
                onClick={Search}
                className="text-gray-400 cursor-pointer"
              />
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <Link href="/login" className="relative">
                <BiUser className="scale-125 user text-gray-500 cursor-pointer" />
                <p className="hidden login bg-slate-600 text-white rounded px-2 py-1 absolute -top-9 -left-8">
                  login
                </p>
              </Link>
              <div className="relative">
                <FiHeart className="scale-125 text-gray-500" />
                <div className="absolute flex items-center justify-center -right-2 -top-1 bg-red-500 w-4 h-4 text-xs text-white rounded-full">
                  21
                </div>
              </div>
              <div className="relative">
                <Link href="/cart">
                  <CgShoppingCart className="scale-125 text-gray-500 cursor-pointer" />
                </Link>
                <div className="absolute flex items-center justify-center -right-2 -top-2  bg-red-500 text-sm w-3 h-3 text-white p-2 rounded-full">
                  {totalProductQty}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div>
        <Container>
          <div className="hidden lg:flex justify-center space-x-6 my-3">
            <Link href="/" className="header_link relative">
              HOME
            </Link>

            <Link href="#categories" className="header_link relative">
              CATEGORIES
            </Link>

            <Link href="/store" className="header_link relative">
              STORE
            </Link>

            <Link href="#testimonials" className="header_link relative">
              TESTIMONIALS
            </Link>

            <Link href="/" className="header_link relative">
              JEWELRY
            </Link>

            <Link href="/" className="header_link relative">
              PERFUME
            </Link>

            <Link href="/dashboard" className="header_link relative">
              DASHBOARD
            </Link>

            <Link href="/cart" className="header_link relative">
              CART
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Header;
