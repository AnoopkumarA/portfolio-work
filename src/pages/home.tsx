import React from "react";
import '../assets/font.css'
import ParticlesDemo from "../components/magicui/paticlescomponents";
import { DockDemo } from "../components/magicui/dockcomponents";
import { TextRevealDemo } from "../components/magicui/text-revealcomponents";
import { ScrollBasedVelocityDemo } from "../components/magicui/velocitycomponents";
import NumberTickerDemo from "../components/magicui/countcomponent";
import ProjectGrid from "../components/Acertinity/servicecomponents";
import Slideshow from "../components/Acertinity/poster";
import Footer from "../components/Footer/Footercomponents";

const home: React.FC = () => {
    return (
        <>
        
        <div className="overflow-hidden bg-[#05081E] relative md:top-28">
        <div className="relative overflow-x-hidden" id="home">
  <ParticlesDemo />
  </div>
  <div className=" mt-10 relative -top-24 md:-top-20 z-10">
    <DockDemo />
</div>
<p className="flex items-center justify-center font-light md:text-2xl text-neutral-300 relative -top-6">Code your dreams into reality, one line at a time, with creativity</p>
 <p className="flex items-center justify-center font-light md:text-2xl text-neutral-300 relative -top-6">and precision in every keystroke.</p>

<div className="flex justify-center items-center text text-white text-6xl md:text-8xl font-semibold mt-36">
    <p className=" relative -top-14" id="about">About Us</p></div>
    <p className="flex items-center justify-center relative -top-10 text-gray-500 text-2xl md:text-5xl font-bold">LeetCode Diaries Assosiation</p>
<div className=" relative top-[48.6rem] -mt-[64rem]">
<TextRevealDemo></TextRevealDemo></div>

<div className="relative left-8 md:-top-28 -top-10 md:left-60 "><NumberTickerDemo></NumberTickerDemo></div>

<div className=" relative top-16">
<ScrollBasedVelocityDemo></ScrollBasedVelocityDemo>
</div>

<div className="flex justify-center items-center text text-white text-6xl md:text-8xl font-semibold mt-36">
<p className=" relative top-24" id="ser">Our Services</p></div>
<p className="flex items-center justify-center relative top-24 mt-8 text-gray-500 text-2xl md:text-4xl font-bold">Partnering With Pillzen Pvt. Ltd</p>

<div className="py-28"><ProjectGrid></ProjectGrid></div>

<div className="flex justify-center items-center text text-white text-4xl md:text-7xl font-semibold">
<p className=" relative -top-14 -mt-20" id="port">Recent Work Portfolio</p></div>
<div className=" flex items-center justify-center">
      <Slideshow />
    </div>

    <div className=" relative top-16 md:top-36">
<ScrollBasedVelocityDemo></ScrollBasedVelocityDemo>
</div>

<div className=" relative mt-36 md:mt-52  md:top-4" id="cont"><Footer></Footer></div>


</div>
  </>
       
    );
}

export default home;
