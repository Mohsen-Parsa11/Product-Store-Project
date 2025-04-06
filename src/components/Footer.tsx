import React from "react";
import Container from "./Container";
import Image from "next/image";
import logo from "../assets/logo.png";
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";

function Footer() {
  return (
    <div>
      <div className="bg-slate-800 py-8 mb-5 lg:mb-0">
        <Container>
          <div>
            <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-start px-20 space-y-2 lg:space-y-0">
              <div>
                <Image src={logo} alt="logo" className="w-24" />
              </div>
              <div className="flex flex-col md:flex-row justify-center md:justify-between items-center space-y-4 lg:space-y-0 md:space-x-12 lg:space-x-32 my-3">
                <div>
                  <a href="#" className="text-lg text-gray-200">
                    Home
                  </a>
                  <div>
                    <p className="text-gray-200">nav</p>
                  </div>
                </div>
                
                <div>
                  <a href="#" className="text-lg text-gray-200">
                    Products
                  </a>
                  <div className="mr-3">
                    <p className="text-gray-200">men</p>
                  </div>
                </div>

                <div>
                  <a href="#" className="text-lg text-gray-200">
                    FAQ
                  </a>
                  <div>
                    <p className="text-gray-300 ">shoping</p>
                  </div>
                </div>

                <div>
                  <div>
                    <a href="#" className="text-lg text-gray-200">
                      Follow Us
                    </a>
                    <div className="flex space-x-4 text-white pt-4">
                      <a href="#">
                        <BsFacebook className=" hover:saturate-100 hover:rotate-12 hover:text-pink-500 transition duration-150"/>
                      </a>
                      <a href="#">
                        <BsInstagram className=" hover:saturate-100 hover:rotate-12 hover:text-pink-500 transition duration-150"/>
                      </a>
                      <a href="#">
                        <BsTwitter className=" hover:saturate-100 hover:rotate-12 hover:text-pink-500 transition duration-150"/>
                      </a>
                      <a href="#">
                        <BsWhatsapp className=" hover:saturate-100 hover:rotate-12 hover:text-pink-500 transition duration-150"/>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </Container>
      </div>
      <div>
        <p className="text-gray-400 py-2 text-center">
          copyright @ reserved, all rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
