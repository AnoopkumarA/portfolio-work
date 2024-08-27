"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
export const ParallaxScroll = ({ images, className, }) => {
    const gridRef = useRef(null);
    const { scrollYProgress } = useScroll({
        container: gridRef, // remove this if your container is not fixed height
        offset: ["start start", "end start"], // remove this if your container is not fixed height
    });
    const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const third = Math.ceil(images.length / 3);
    const firstPart = images.slice(0, third);
    const secondPart = images.slice(third, 2 * third);
    const thirdPart = images.slice(2 * third);
    return (_jsx("div", { className: cn("h-[40rem] items-start overflow-y-auto w-full", className), ref: gridRef, children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start  max-w-5xl mx-auto gap-10 py-40 px-10", ref: gridRef, children: [_jsx("div", { className: "grid gap-10", children: firstPart.map((el, idx) => (_jsx(motion.div, { style: { y: translateFirst }, children: _jsx("img", { src: el, className: "h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0", height: "400", width: "400", alt: "thumbnail" }) }, "grid-1" + idx))) }), _jsx("div", { className: "grid gap-10", children: secondPart.map((el, idx) => (_jsx(motion.div, { style: { y: translateSecond }, children: _jsx("img", { src: el, className: "h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0", height: "400", width: "400", alt: "thumbnail" }) }, "grid-2" + idx))) }), _jsx("div", { className: "grid gap-10", children: thirdPart.map((el, idx) => (_jsx(motion.div, { style: { y: translateThird }, children: _jsx("img", { src: el, className: "h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0", height: "400", width: "400", alt: "thumbnail" }) }, "grid-3" + idx))) })] }) }));
};
