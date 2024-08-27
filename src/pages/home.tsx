import React from "react";
import '../App.css'
import { GridBackgroundDemo1 } from "../components/AcertinityUI/gridbackground/gridbackground2";
import { TypewriterEffectSmoothDemo } from "../components/AcertinityUI/typewritercomponents";
import { WordRotateDemo } from "../components/MagicUI/wordcomponents";
import { FloatingDockDemo } from "../components/AcertinityUI/dockcomponents";
import { TextGenerateEffectDemo } from "../components/AcertinityUI/textgeneratorcomponents";

import NumberTickerDemo from "../components/MagicUI/countcomponent";
import Skills from "../components/AcertinityUI/skills";
import { ParallaxScrollDemo } from "../components/AcertinityUI/paralleaxcomponents";
import ContactForm from "../components/AcertinityUI/contact";

import { GridBackgroundDemo3 } from "../components/AcertinityUI/gridbackground3";
import Footer from "../components/Footer/footer";
import WorkExperience from "../components/AcertinityUI/experince";
import Services from "../components/AcertinityUI/icons-work";



const home: React.FC = () => {
    return (
        <>

<div className="overflow-hidden bg-[#020516]">
  <div className="mt-32 relative md:top-8">
        <GridBackgroundDemo1 /> </div>
        <div className="flex flex-col items-center justify-center  bg-transparent text-white font-light relative md:-top-[7.8rem] -top-[12rem]  -mt-[35.4rem]">
        <TypewriterEffectSmoothDemo/>
    </div>
<div className=" relative flex items-center justify-center md:-top-[16.7rem] -top-[22.1rem] -mt-16"><WordRotateDemo></WordRotateDemo></div>
        <div className=" relative -mt-[35rem] md:top-36 top-[1rem]"><FloatingDockDemo></FloatingDockDemo></div>

<div className="relative flex justify-center items-center text-white font-light md:text-5xl text-4xl">
    ABOUT ME
</div>
<div className="w-[38rem] relative md:left-[47rem] md:-top-28 md:mt-48 top-16"><TextGenerateEffectDemo/></div>
<button className=" rounded-full bg-[#020516] border-4 border-[#9290C3] text-white px-10 py-2 md:px-16 md:py-3 relative md:mt-16 mt-28 md:-top-28 left-16 md:left-[48rem] font-semibold">Hire Me</button>
<button className=" rounded-full bg-white text-[#9290C3] px-6 py-3 md:px-10 md:py-3 relative mt-16 md:-top-28  left-32  md:left-[54rem] font-semibold">Download CV</button>

<div className="mt-60 md:mt-52 relative -top-40 md:-top-43  text-white p-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <WorkExperience />
          <Services />
        </div>
      </div>
    </div>

<div className="relative flex justify-center items-center text-white font-light text-4xl md:text-5xl -top-16">
    SKILLS
</div>
<div className=" relative"><Skills/></div>    
<div className=" relative left-8 md:-top-16 -top-52 md:left-20 mt-60"><NumberTickerDemo/></div>
<div className="relative flex justify-center items-center text-white font-light text-5xl -top-16">
    PORTFOLIO
</div>    
<div>
      <h1 className="text-center text-2xl font-bold"></h1>
      <ParallaxScrollDemo />
    </div>
<div className="mt-5 relative top-28 ">
<GridBackgroundDemo3/> </div>
<div className="relative flex justify-center items-center text-white font-light text-4xl md:text-5xl -top-[52.7rem]">
    CONTACT
</div>
<div className=" relative z-10 -top-[4rem] md:-top-[9rem] -mt-[45rem]"><ContactForm/></div>
<div className=""><Footer/></div>

        </div>

      
      
   
  </>
       
    );
}

export default home;
