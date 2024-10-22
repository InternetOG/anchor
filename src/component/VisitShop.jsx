import React from 'react'
import { Link } from 'react-router-dom'

const VisitShop = () => {
  return (
    <article className='max-w-[900px] my-0 mx-auto text-center py-[5rem] custom-storyMini:px-[2.3rem]'>
        <div className="flex flex-col gap-6">
            <h2 className='text-[#12305B] text-2xl font-[700]'>Visit Our Shop</h2>
            <p className='text-[#21384299]'>Our Personal Diffuser is an aromatherapy device that contains a blend of melatonin, lavender, and chamomile. A few breaths of our plant-based essential oil mist will mellow you out, quiet the mind, and lull you to bed.</p>
            <div>
              <Link to="shop" className='border border-solid border-[#FC5959] rounded bg-[#FC5959] px-[3rem] py-[.5rem] text-white'>Visit Shop</Link>
            </div>
        </div>
    </article>
  )
}

export default VisitShop