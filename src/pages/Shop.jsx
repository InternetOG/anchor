import React from 'react'
import { Link } from 'react-router-dom'
import MoreTestimony from '../component/MoreTestimony'

const Shop = () => {
  return (
    <>
      <section className='flex gap-[6rem] pl-[6.3rem] custom-storyMiniPro:grid custom-story:px-[2.3rem] pt-12 text-[#12305B]'>
        <div className='w-[40%] custom-storyMiniPro:w-[100%]'>
            <img width="100%" src="/src/assets/shop/Vape-Pen 1.png" alt="" />
        </div>
        <section className='flex w-[50%] justify-center custom-storyMiniPro:w-[100%]'>
            <article className='grid items-center'>
              <div className='grid gap-[1rem] max-w-[500px] custom-storyMiniPro:max-w-full'>
                <h2 className='text-[#12305B] text-2xl font-[700]'>About Product</h2>
                <section className='grid gap-3'>
                  <section>
                    <p>Our Personal Diffuser is an aromatherapy device that contains a blend of melatonin, lavender, and chamomile. A few breaths of our plant-based essential oil mist will mellow you out, quiet the mind, and lull you to bed.</p>
                    <i className='grid mt-3 text-[#4D533C]'>😊  Promotes calm and relaxation. <br/>
                      💤  Inhalation allows for a rapid effect.<br/>
                      ✅  100% drug-free, plant-based ingredients.<br/>
                      ‍⚕️  3rd-party lab tested.<br/>
                    </i>
                  </section>

                  <section className='flex gap-10 custom-max:'>
                    <div className='grid gap-2'>
                      <p>Price</p>
                      <p>USD 50</p>
                    </div>
                    <div className=''> 
                      <form className='grid gap-2'>
                        <label htmlFor="unit">Unit</label>
                        <input type="number" id='unit' className='w-20' placeholder='0' min={0}/>
                      </form>
                    </div>
                  </section>
                </section>
                <div className='py-[.6rem]'>
                    <Link className=" border border-solid border-[#FC5959] rounded px-[4rem] bg-[#FC5959] py-[.6rem]" to="shop">Buy</Link>
                </div>
              </div>
            </article>
        </section>
      </section>
      <MoreTestimony />
    </>
  )
}

export default Shop