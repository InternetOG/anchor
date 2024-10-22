import React from 'react'
import { IoStarSharp } from 'react-icons/io5'

const ProductReview = () => {
  return (
    <section className='pl-[6.3rem] py-[5rem] custom-story:px-[2.3rem]'>
        <h2 className='text-[#12305B] text-2xl font-[700]'>Product Review</h2>
        <section className="flex gap-[1rem] custom-story:grid custom-story:grid-cols-2">
            <article className="pb-5 shadow-[50px_50px_100px_0px_#00000025] bg-[#fbfbfb]">
                <img src="/src/assets/home/product1.png" alt="" />
                <div className='px-[3rem] pt-[3rem] bg-[#fbfbfb] custom-storyMiniPro:px-[1rem]'>
                    <p>Works great! Just use it and then relax, I fall asleep with no problem every time I use it.</p>
                    <h3 className="mt-4">Rachel Dill</h3>
                </div>
                <div className='flex pl-[3rem] text-green-500 mt-3 gap-1'>
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                </div>
            </article>

            <article className="pb-5 shadow-[50px_50px_100px_0px_#00000025] bg-[#fbfbfb]">
                <img src="/src/assets/home/product1.png" alt="" />
                <div className='px-[3rem] pt-[3rem] bg-[#fbfbfb] custom-storyMiniPro:px-[1rem]'>
                    <p>Works great! Just use it and then relax, I fall asleep with no problem every time I use it.</p>
                    <h3 className="mt-4">Rachel Dill</h3>
                </div>
                <div className='flex pl-[3rem] text-green-500 mt-3 gap-1'>
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                </div>
            </article>

            <article className="pb-5 shadow-[50px_50px_100px_0px_#00000025] bg-[#fbfbfb]">
                <img src="/src/assets/home/product1.png" alt="" />
                <div className='px-[3rem] pt-[3rem] bg-[#fbfbfb] custom-storyMiniPro:px-[1rem]'>
                    <p>Works great! Just use it and then relax, I fall asleep with no problem every time I use it.</p>
                    <h3  className="mt-4">Rachel Dill</h3>
                </div>
                <div className='flex pl-[3rem] text-green-500 mt-3 gap-1'>
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                </div>
            </article>

            <article className="pb-5 shadow-[50px_50px_100px_0px_#00000025] bg-[#fbfbfb]">
                <img src="/src/assets/home/product1.png" alt="" />
                <div className='px-[3rem] pt-[3rem] bg-[#fbfbfb] custom-storyMiniPro:px-[1rem]'>
                    <p>Works great! Just use it and then relax, I fall asleep with no problem every time I use it.</p>
                    <h3 className="mt-4">Rachel Dill</h3>
                </div>
                <div className='flex pl-[3rem] text-green-500 mt-3 gap-1'>
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                </div>
            </article>
        </section>
    </section>
  )
}

export default ProductReview