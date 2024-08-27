"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../lib/utils";
export default function WordRotate({ words, duration = 2100, framerProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.25, ease: "easeOut" },
}, className, }) {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, duration);
        // Clean up interval on unmount
        return () => clearInterval(interval);
    }, [words, duration]);
    return (_jsx("div", { className: "overflow-hidden py-2", children: _jsx(AnimatePresence, { mode: "wait", children: _jsx(motion.h1, { className: cn(className), ...framerProps, children: words[index] }, words[index]) }) }));
}
