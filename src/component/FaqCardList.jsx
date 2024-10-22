import React, { useState } from 'react'
import FaqList from './FaqList'
import faqData from '../herodb.js'

const FaqCardList = () => {

    const faqArr = faqData.map(arr => {
        return <FaqList faqDataItem={arr} key={arr.id} />
    });

  return (
    <ul className=''>
        {faqArr}
    </ul>
  )
}

export default FaqCardList