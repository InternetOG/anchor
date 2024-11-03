import React, { useState } from 'react'

const FaqList = ({faqDataItem, isActive, onClick}) => {
    const [display, setDisplay] = useState(false);

  return (
    <>
        <li className='border-t p-3 grid w-full' onClick={onClick}>
            {faqDataItem.question}
            <span className={`${isActive ? "grid" : "hidden"} pt-2`}>{faqDataItem.answer}</span>
        </li>
    </>
  )
}

export default FaqList