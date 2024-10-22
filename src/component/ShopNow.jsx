import React from 'react'
import { Link } from 'react-router-dom'

const ShopNow = () => {
  return (
    <section className='flex gap-[2rem] pl-[6.3rem] custom-storyMiniPro:grid custom-story:px-[2.3rem] '>
        <div className='w-[50%] custom-storyMiniPro:w-[100%]'>
            <img src="/src/assets/home/Group 3.png" alt="" />
        </div>
        <section className='flex w-[40%] justify-center custom-storyMiniPro:w-[100%]'>
            <article className='grid items-center'>
                <div className='grid gap-[1rem] max-w-[450px] custom-storyMiniPro:max-w-full'>
                    <h2 className='text-[#12305B] text-2xl font-[700]'>Shop Now</h2>
                    <p>Our Personal Diffuser is an aromatherapy device that contains a blend of melatonin, lavender, and chamomile. A few breaths of our plant-based essential oil mist will mellow you out, quiet the mind, and lull you to bed.</p>
                    <div className='py-[.6rem]'>
                        <Link className=" border border-solid border-[#FC5959] rounded px-[4rem] bg-[#FC5959] py-[.6rem]" to="shop">Visit shop</Link>
                    </div>
                </div>
            </article>
        </section>
    </section>
  )
}

export default ShopNow