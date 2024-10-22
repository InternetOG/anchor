import React, { useState } from 'react'
import FaqCardList from '../component/FaqCardList';

const Faq = () => {
  const [display, setDisplay] = useState(false);
  return (
    <section className='flex mb-2 pt-5 gap-10 px-[2.3rem] text-[#12305B]'>
      <section className='w-[15%]'>
        <ul>
          <li className='p-3'>Sleeptiq Products</li>
          <li className='p-3'>Order</li>
          <li className='p-3'>Melatonin</li>
        </ul>
      </section>
      <section className='grid w-[70%]'>
        <FaqCardList />
      </section>
    </section>
  )
}

export default Faq