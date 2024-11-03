import React, { useState } from 'react'
import FaqList from './FaqList'
import faqData from '../herodb.js'

const FaqCardList = () => {
  const [activeIndex, setActiveIndex] = useState(null);

    const faqArr = faqData.map((arr, index) => {
        return <FaqList 
          faqDataItem={arr} 
          key={arr.id} 
          isActive={activeIndex === index} 
          onClick={() => setActiveIndex(activeIndex === index ? null : index)}
        />
    });

  return (
    <ul className=''>
        {faqArr}
    </ul>
  )
}

export default FaqCardList