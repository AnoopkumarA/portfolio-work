import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import '../../App.css';
import { GridBackgroundDemo1 } from "../AcertinityUI/gridbackground/gridbackground2";
import ContactForm from "../AcertinityUI/contact";
import { FloatingDockDemo } from "../AcertinityUI/dockcomponents";
import WorkExperience from "../AcertinityUI/experince";
import { GridBackgroundDemo3 } from "../AcertinityUI/gridbackground3";
import Services from "../AcertinityUI/icons-work";
import { ParallaxScrollDemo } from "../AcertinityUI/paralleaxcomponents";
import Skills from "../AcertinityUI/skills";
import { TextGenerateEffectDemo } from "../AcertinityUI/textgeneratorcomponents";
import { TypewriterEffectSmoothDemo } from "../AcertinityUI/typewritercomponents";
import Footer from "../Footer/footer";
import NumberTickerDemo from "../MagicUI/countcomponent";
import { WordRotateDemo } from "../MagicUI/wordcomponents";
const home = () => {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "overflow-hidden bg-[#020516]", children: [_jsxs("div", { className: "mt-32 relative md:top-8", children: [_jsx(GridBackgroundDemo1, {}), " "] }), _jsx("div", { className: "flex flex-col items-center justify-center  bg-transparent text-white font-light relative md:-top-[7.8rem] -top-[12rem]  -mt-[35.4rem]", children: _jsx(TypewriterEffectSmoothDemo, {}) }), _jsx("div", { className: " relative flex items-center justify-center md:-top-[16.7rem] -top-[22.1rem] -mt-16", children: _jsx(WordRotateDemo, {}) }), _jsx("div", { className: " relative -mt-[35rem] md:top-36 top-[1rem]", children: _jsx(FloatingDockDemo, {}) }), _jsx("div", { className: "relative flex justify-center items-center text-white font-light md:text-5xl text-4xl", children: "ABOUT ME" }), _jsx("div", { className: "w-[38rem] relative md:left-[47rem] md:-top-28 md:mt-48 top-16", children: _jsx(TextGenerateEffectDemo, {}) }), _jsx("button", { className: " rounded-full bg-[#020516] border-4 border-[#9290C3] text-white px-10 py-2 md:px-16 md:py-3 relative md:mt-16 mt-28 md:-top-28 left-16 md:left-[48rem] font-semibold", children: "Hire Me" }), _jsx("button", { className: " rounded-full bg-white text-[#9290C3] px-6 py-3 md:px-10 md:py-3 relative mt-16 md:-top-28  left-32  md:left-[54rem] font-semibold", children: "Download CV" }), _jsx("div", { className: "mt-60 md:mt-52 relative -top-40 md:-top-43  text-white p-8", children: _jsx("div", { className: "max-w-5xl mx-auto", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-12", children: [_jsx(WorkExperience, {}), _jsx(Services, {})] }) }) }), _jsx("div", { className: "relative flex justify-center items-center text-white font-light text-4xl md:text-5xl -top-16", children: "SKILLS" }), _jsx("div", { className: " relative", children: _jsx(Skills, {}) }), _jsx("div", { className: " relative left-8 md:-top-16 -top-52 md:left-20 mt-60", children: _jsx(NumberTickerDemo, {}) }), _jsx("div", { className: "relative flex justify-center items-center text-white font-light text-5xl -top-16", children: "PORTFOLIO" }), _jsxs("div", { children: [_jsx("h1", { className: "text-center text-2xl font-bold" }), _jsx(ParallaxScrollDemo, {})] }), _jsxs("div", { className: "mt-5 relative top-28 ", children: [_jsx(GridBackgroundDemo3, {}), " "] }), _jsx("div", { className: "relative flex justify-center items-center text-white font-light text-4xl md:text-5xl -top-[52.7rem]", children: "CONTACT" }), _jsx("div", { className: " relative z-10 -top-[4rem] md:-top-[9rem] -mt-[45rem]", children: _jsx(ContactForm, {}) }), _jsx("div", { className: "", children: _jsx(Footer, {}) })] }) }));
};
export default home;
