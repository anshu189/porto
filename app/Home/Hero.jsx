"use client"
import React from 'react'
import BlurText from "../ui-components/BlurText";
import SplitText from "../ui-components/SplitText";
import { CirclePlus } from 'lucide-react';
import { IconCloud } from "@/components/magicui/icon-cloud";
import { Globe } from "@/components/magicui/globe";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

const Hero = () => {
  const hey = "../assets/hey.png";
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <div className="w-full h-[95dvh] flex justify-between items-center text-white">
      <div className='w-[60%] h-[95dvh] flex flex-col items-start justify-center pl-15'>
        <div className='flex items-center justify-center gap-2 border border-[#383838] p-1 rounded-md bg-[#1a1a1a] backdrop-blur-md -mb-6'>
          <img src={hey} alt="Hello" className='w-6 h-6 rounded-sm' />
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
            className="text-[8dvw] -mt-[10%] font-extrabold"
          />
        </div>
        <div className=''>
          <SplitText
            text="Where tech meets creativity."
            className="text-[1dvw] text-center"
            delay={20}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
          /><br />
          <SplitText
            text="Engineering Solutions and Crafting Stories."
            className="text-[1dvw] text-center"
            delay={40}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
          />
        </div>
        <button className='flex items-center justify-center gap-8 font-medium mt-[5dvh] btn-bg p-4 rounded-lg hover:opacity-95'><p>Start to collaborate</p><CirclePlus className='size-6 hover:rotate-90 duration-200' /></button>
      </div>
      <div className='w-[50%] flex items-center justify-center relative overflow-hidden'>
        <IconCloud images={images} className="" />
        {/* <div className="relative flex size-full h-[70dvh] max-w-lg items-center justify-center overflow-hidden">
          <Globe className="top-0" />
        </div> */}
      </div>
    </div>
  )
}

export default Hero