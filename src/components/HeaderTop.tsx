"use client"
import React from "react";
import Container from "./Container";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import SelectBox from "./SelectBox";
import { redirect } from "next/navigation";
import cookie from "js-cookie";

function HeaderTop() {
  return (
    <div className="border-b border-t-2 shadow border-gray-300 mt-10 mb-4 hidden lg:block">
      <Container>
        <div className="flex flex-col md:flex-row justify-center md:justify-between py-5">
          <div className="flex space-x-2">
            <a href="#" className="bg-gray-200 rounded p-[5px] transition hover:bg-[#ff8f9c] text-gray-700 hover:text-white cursor-pointer">
              <BsFacebook />
            </a>
            <a href="#" className="bg-gray-200 rounded p-[5px] transition hover:bg-[#ff8f9c] text-gray-700 hover:text-white cursor-pointer">
              <BsTwitter />
            </a>
            <a href="#" className="bg-gray-200 rounded p-[5px] transition hover:bg-[#ff8f9c] text-gray-700 hover:text-white cursor-pointer">
              <BsInstagram />
            </a>
            <a href="#" className="bg-gray-200 rounded p-[5px] transition hover:bg-[#ff8f9c] text-gray-700 hover:text-white cursor-pointer">
              <BsLinkedin />
            </a>
          </div>

          <div className="md:flex space-x-1">
            <h4 className="text-gray-500 uppercase text-xl font-semibold">free shipping</h4>
            <h4 className="text-gray-400 uppercase text-xl">this week order over - $55</h4>
          </div>

         <SelectBox />

         <button onClick={()=>{
            cookie.remove("token")
            redirect("/login")
         }} className="bg-red-400 px-3 py-1 rounded active:scale-98 shadow active:shadow-none cursor-pointer text-white transition duration-75">logout</button>
        </div>
      </Container>
    </div>
  );
}

export default HeaderTop;
