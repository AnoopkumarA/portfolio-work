"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TypewriterEffectSmooth } from "./typewritter";
export function TypewriterEffectSmoothDemo() {
    const words = [
        {
            text: "CHRISTY",
            className: "text-white font-light md:text-[3.2rem] text-[1.8rem]",
        },
        {
            text: "MARIA",
            className: "text-white font-light md:text-[3.2rem] text-[1.8rem]",
        },
        {
            text: "SEBASTIAN",
            className: "text-white font-light md:text-[3.2rem] text-[1.8rem]",
        },
    ];
    return (_jsxs("div", { className: "flex flex-col items-center justify-center h-[40rem] text-white font-light bg-transparent", children: [_jsx("p", { className: "md:text-4xl text-2xl mb-2 relative md:-left-80 -left-32", children: "Hi I'm," }), _jsx(TypewriterEffectSmooth, { words: words })] }));
}
