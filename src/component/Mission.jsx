import React from 'react'
import { Link } from 'react-router-dom'

const Mission = () => {
  return (
    <section className='c pl-[6.3rem] pt-[5rem] custom-storyMini:px-[2.3rem]'>
        <article className='flex justify-between custom-storyMiniPro:grid'>
            <div className=' w-[35%] flex items-center custom-storyMiniPro:w-full'>
                <div className='flex flex-col gap-4 text-left w-full'>
                    <h2 className='text-[#12305B] text-2xl font-[700]'>Our Misson</h2>
                    <p>
                        We started Sleepstiq with 1 simple goal: to be your best friend at bedtime. We, just like you, deal with stress, unease, and trouble sleeping from a number of silly things like school, work, screens, numbers, and people. That's why we created products that aim to - 
                    </p>
                    <ul>
                        <li>&#10004; Promote Calm</li>
                        <li>&#10004; support Sleep</li>
                        <li>&#10004; Reduce Stress</li>
                        <li>&#10004; Aid Relaxation</li>
                    </ul>
                </div>
            </div>
            <div className='w-[50%] custom-storyMini:w-[60%] custom-storyMiniPro:w-full custom-storyMiniPro:mt-[2rem]'>
                <div className=' float-right w-full'>
                    <img src="/src/assets/home/missionimage.png" width="100%" alt="" />
                </div>
            </div>
        </article>
    </section>
  )
}

export default Mission