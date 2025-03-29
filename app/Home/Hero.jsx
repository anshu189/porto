"use client"
import React from 'react'
import BlurText from "../components/BlurText";
import SplitText from "../components/SplitText";

const Hero = () => {
  const hey = "../assets/hey.png";

  return (
    <div className="w-full h-[95dvh] flex justify-between items-center">
      <div className='w-[60%] h-[95dvh] flex flex-col items-start justify-center pl-15'>
        <div className='flex items-center justify-center gap-2 border border-[#383838] p-1 rounded-md bg-[#1a1a1a] backdrop-blur-md -mb-6'>
          <img src={hey} alt="Hello" className='w-6 h-6 rounded-sm'/>
          <p className='text-sm'>Hey! I'm</p>
        </div>
        <div className='flex flex-col uppercase -ml-3'>
        <BlurText
          text="Praveen"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-[8dvw] font-extrabold text-signblue"
        />
         <BlurText
          text="Pasupuleti"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-[8dvw] font-extrabold"
        />
        </div>
        <div className=''>
          <SplitText
            text="Where tech meets creativity."
            className="text-[1dvw] font-extralight text-center"
            delay={20}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
          /><br/>
          <SplitText
            text="Engineering Solutions and Crafting Stories."
            className="text-[1dvw] font-extralight text-center"
            delay={40}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
          />
        </div>
        <div className='mt-10'>
          <button><p>Start to collaborate</p><img src={0} alt="" /></button>
        </div>
      </div>
      <div className='w-[50%]'></div>
    </div>
  )
}

export default Hero