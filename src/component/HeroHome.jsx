import React from 'react'
import { Link } from 'react-router-dom';
import google from "../assets/home/google.png"
import forbes from "../assets/home/forbes.png"
import bloomberg from "../assets/home/bloomberg.png"
import sleepreview from "../assets/home/sleepreview.png"
import influencive from "../assets/home/influencive.png"

const HeroHome = ({data}) => {
  return (
    <section className='mt-[8rem] custom-max:mt-[6rem] mb-4 text-[#12305B]'>
        <section className='max-w-[500px]'>
            <p>We're here to help you</p>
            <h1 className=' text-[4rem] font-bold'>Relax & Rest</h1>
            <p className=''>With the aid of our Melatonin Sleepstiq, we can assure you that you can get quality sleep.</p>
            <Link to="shop" className='inline-block mt-[1rem] border border-solid border-[#FC5959] rounded px-[4rem] bg-[#FC5959] py-[.6rem]'>Visit Shop</Link>
        </section>
        <section className='flex items-center justify-between gap-10 mt-[10rem] bg-white border px-5 py-5'>
            <div className=""><img src={google} alt="" /></div>
            <div className=""><img src={forbes} alt="" /></div>
            <div className=""><img src={bloomberg} alt="" /></div>
            <div className=""><img src={sleepreview} alt="" /></div>
            <div className=""><img src={influencive} alt="" /></div>
        </section>
    </section>
  )
}

export default HeroHome