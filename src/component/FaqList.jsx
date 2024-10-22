import React, { useState } from 'react'

const FaqList = ({faqDataItem}) => {
    const [display, setDisplay] = useState(false);

    const handleClickDisplay = () => {
        setDisplay(prevDisplay => !prevDisplay);
    }

  return (
    <>
        <li className='border-t p-3 grid w-full' onClick={handleClickDisplay}>
            {faqDataItem.question}
            <span className={`${display ? "grid" : "hidden"} pt-2`}>{faqDataItem.answer}</span>
        </li>
    </>
  )
}

export default FaqList