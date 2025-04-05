"use client"
import React, { useState } from "react";
import Image from "next/image";
import user from "../../assets/user2.png";
import email2 from "../../assets/eamil2.png";
import password from "../../assets/password2.png";
import iphone from "../../assets/iphone.jpg";
import google from "../../assets/google1.png";
import Container from "@/components/Container";
import { redirect } from "next/navigation";
import cookie from "js-cookie";



function Login() {

  const [data, setData] = useState({name:"", email:"", password:""});
  const handleSaveUserData= (e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name, value}= e.target;
    setData({...data, [name]:value})
  }
  console.log(data);

  const handleSetToken= ()=>{
    const token = "kjksfiewjckj2jjsafj20jkjdsf49";
    cookie.set("token", token, {expires: 21});
    redirect("/dashboard")
  }



  return (
    <Container>
      <div
        className={`loginBackgroundImage shadow-lg rounded bg-gray-00 max-w-4xl my-8 border border-gray-200 mx-auto`}
      >
        <div>
          <div className="max-w-[750px]">
            <div className=" rounded-lg  shadow-blue-200 lg:h-[470px] lg:w-1/2 p-5">
              <h2 className="text-2xl text-slate-800 text-center lg:text-left font-bold">
                Welcome back!
              </h2>
              <p className="text-sm mb-5 text-center lg:text-left">
                Enter your credentials to access your account
              </p>

              <div className="space-y-2">
                <div className="space-y-1">
                  <p className="text-gray-700">Name</p>
                  <div className="flex border border-slate-400 justify-between py-1 rounded px-3">
                    <input
                      onChange={(e)=>handleSaveUserData(e)}
                      name="name"
                      defaultValue={""}
                      type="text"
                      placeholder="john smith"
                      className="outline-0 bg-transparent w-full"
                    />
                    <Image src={user} className="w-5 ml-2" alt="user" />
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-700">Email</p>
                  <div className="flex border border-slate-400 justify-between py-1 rounded px-3">
                    <input
                     onChange={(e)=>handleSaveUserData(e)}
                      defaultValue={""}
                      type="text"
                      name="email"
                      placeholder="enter you email"
                      className="outline-0 bg-transparent w-full"
                    />
                    <Image src={email2} className="w-5 ml-2" alt="" />
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-700">Password</p>
                  <div className="flex border border-slate-400 justify-between py-1 rounded px-3">
                    <input
                      onChange={(e)=>handleSaveUserData(e)}
                      defaultValue={""}
                      type="password"
                      name="password"
                      placeholder="enter your password"
                      className="outline-0 bg-transparent w-full"
                    />
                    <Image src={password} className="w-5 ml-2" alt="" />
                  </div>
                </div>
              </div>
              <button onClick={handleSetToken} className=" bg-blue-900 text-white mt-4 w-full py-2 rounded-full cursor-pointer hover:opacity-90 active:-translate-y-0.5 active:shadow-none shadow-lg shadow-violet-200 transition duration-100">
                Submit
              </button>
              <p className="text-sm text-center text-gray-500 my-2">
                Do you have an account?
                <a href="#" className="text-blue-700 ">
                  sign in
                </a>
              </p>

              <div className="flex justify-center items-center space-x-2">
                <span className="bg-slate-600 w-16 h-0.5 "></span>
                <span>Or Sign Up</span>
                <span className="bg-slate-600 w-16 h-0.5 "></span>
              </div>

              <div className="flex flex-col lg:flex-row space-y-3 lg:space-x-4 mt-2">
                <a href="#">
                  <div className="flex space-x-2 items-center border border-gray-300 px-3 py-1 rounded-lg justify-center lg:justify-normal">
                    <Image src={iphone} className="w-5" alt="" />
                    <p className="text-xs">Sign in with Apple</p>
                  </div>
                </a>
                <a href="#">
                  <div className="flex space-x-2 items-center border border-gray-300 px-3 py-2 rounded-lg justify-center lg:justify-normal">
                    <Image src={google} className="w-5" alt="" />
                    <p className="text-xs">Sign in with Google</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Login;
