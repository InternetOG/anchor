import React from 'react'
import { IoIosSearch } from "react-icons/io";

const HeroFaq = () => {
  return (
    <section className='mt-[5rem] h-full pt-[6rem] pb-[15rem] text-[#12305B]'>
      <p>We're here to help you</p>
      <h1 className='text-[4rem] font-bold'>How can we assist?</h1>
      <section className='inline-flex border border-solid focus-within:outline focus-within:outline-gray-500 bg-white pl-3'>
        <div className='flex justify-center items-center'>
          <IoIosSearch className='text-2xl'/>
        </div>
        <div className='max-w-[800px]'>
          <input type="search" className=' p-3 outline-none w-[100%]' placeholder='Search FAQs here'/>
        </div>
      </section>
    </section>
  )
}

export default HeroFaq