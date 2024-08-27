"use client";
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../lib/utils";
export const TextGenerateEffect = ({ words, className, filter = true, duration = 0.5, }) => {
    const [scope, animate] = useAnimate();
    let wordsArray = words.split(" ");
    useEffect(() => {
        animate("span", {
            opacity: 1,
            filter: filter ? "blur(0px)" : "none",
        }, {
            duration: duration ? duration : 1,
            delay: stagger(0.2),
        });
    }, [scope.current]);
    const renderWords = () => {
        return (_jsx(motion.div, { ref: scope, children: wordsArray.map((word, idx) => {
                return (_jsxs(motion.span, { className: "dark:text-white text-white opacity-0 ", style: {
                        filter: filter ? "blur(10px)" : "none",
                    }, children: [word, " "] }, word + idx));
            }) }));
    };
    return (_jsx("div", { className: cn("font-bold", className), children: _jsx("div", { className: "mt-4", children: _jsx("div", { className: " dark:text-white text-black md:text-2xl text-xl max-w-[27rem] md:max-w-none leading-snug tracking-wide ml-10 md:ml-0", children: renderWords() }) }) }));
};
