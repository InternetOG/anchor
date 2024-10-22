import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import Slider from 'react-slick/lib/slider';
import MoreTestimony from './MoreTestimony';


const Testimony = () => {
  return (
    <section className='py-[5rem] pl-[6.3rem] custom-story:pl-[2.3rem] custom-story:gap-10'>
        <section className='grid grid-cols-[1fr_1fr] custom-storyMiniPro:grid-cols-1 '>
            <section className='custom-storyMiniPro:pr-[2.3rem]'>
                <article className='text-[#12305B] max-w-[500px] custom-storyMini:max-w-[400px]'>
                    <p>Our Amazing Story</p>
                    <h2 className=' text-4xl font-bold mt-5'>10k+ Happy Customers</h2>
                    <p className='text-sm mt-5 text-[#21384299]'>There’s no secret sauce, no wizard behind the curtain. What makes Aerolab tick is an interdisciplinary team with a framework that fosters candid collaboration.</p>
                    <Link className='block mt-5 text-[#12305B] underline decoration-[#12305B]'>More know About us</Link>
                </article>
            </section>

            <section className='flex justify-center custom-story:pr-[2.3rem] custom-storyMiniPro:mt-[2rem]'>
                <article className='bg-[#FBF9F2] px-[2rem] py-[2rem] max-w-[400px] custom-storyMini:max-w-[400px]'>
                    <p className='text-[#4D533C]'><i>I’m a very anxious person but use this and feel so relaxed and sleep way better now with the aid of sleepstiq. </i></p>
                    <section className='flex items-center gap-5 mt-6'>
                        <div>
                            <img src="/src/assets/home/miller.png" className='rounded-full' alt="miller's img" />
                        </div>

                        <div>
                            <h3 className='text-[#4D533C]'>James Miller</h3>
                            <p className='text-[#152934]'>CEO, Techbias</p>
                        </div>
                    </section>
                </article>
            </section>
        </section>
        <MoreTestimony />
    </section>
  )
}

export default Testimony