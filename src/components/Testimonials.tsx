import React from 'react'
import Container from './Container'
import Image from 'next/image'
import profile from "../assets/profile1.jpg"
import quote from "../assets/quote.jpg"

function Testimonials() {
  return (
    <div className='py-5 mb-5' id='testimonials'>
        <Container>
            <h3 className='text-xl font-semibold text-slate-600 mb-4'>Testimonials</h3>
            <div className='grid md:grid-cols-12 gap-4'>
                <div className="md:col-span-3 space-y-1 px-6 place-items-center border rounded-md border-gray-300 shadow h-96 py-10">
                    <Image src={profile} alt='testimonials' className='rounded-full object-cover w-20 h-20'/>
                    <h3 className='text-xl lg:text-2xl font-semibold text-slate-600'>Elsa Doe</h3>
                    <h4 className='text-sm text-center lg:text-start lg:text-[16px]'>CEO & Founder Invision</h4>
                    <Image src={quote}  alt='quote' className='w-8 lg:w-14'/>
                    <p className='text-gray-400 text-sm w-full text-center'>Lorem ignore ipsum dolor sit amet consectetur lorem3 adipisicing elit. Optio accusamus quos sit.</p>
                </div>
                <div className="md:col-span-9 place-items-center py-34 background_image bg-red-600 bg-cover h-96 rounded-md border border-gray-300 shadow">
                    <div className='flex flex-col justify-center px-5 md:px-16 py-5 overlay rounded-md'>
                      <button className='px-2 w-32 mx-auto py-1 bg-black text-white rounded-md'>25% DISCOUNT</button>
                      <h4 className='text-xl mt-1 font-bold text-center'>Summer Collection</h4>
                      <p className='text-center mt-3 text-gray-600'>Starting @ $20 <b>Shop Now</b></p>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Testimonials