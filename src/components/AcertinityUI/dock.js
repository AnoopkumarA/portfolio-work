import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/
import { cn } from "../../lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform, } from "framer-motion";
import { useRef, useState } from "react";
export const FloatingDock = ({ items, desktopClassName, mobileClassName, }) => {
    return (_jsxs(_Fragment, { children: [_jsx(FloatingDockDesktop, { items: items, className: desktopClassName }), _jsx(FloatingDockMobile, { items: items, className: mobileClassName })] }));
};
const FloatingDockMobile = ({ items, className, }) => {
    const [open, setOpen] = useState(false);
    return (_jsxs("div", { className: cn("relative block md:hidden", className), children: [_jsx(AnimatePresence, { children: open && (_jsx(motion.div, { layoutId: "nav", className: "absolute bottom-full mb-2 inset-x-0 flex flex-col gap-2 ", children: items.map((item, idx) => (_jsx(motion.div, { initial: { opacity: 0, y: 10 }, animate: {
                            opacity: 1,
                            y: 0,
                        }, exit: {
                            opacity: 0,
                            y: 10,
                            transition: {
                                delay: idx * 0.05,
                            },
                        }, transition: { delay: (items.length - 1 - idx) * 0.05 }, children: _jsx("a", { href: item.href, className: "h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-900 flex items-center justify-center", children: _jsx("div", { className: "h-4 w-4", children: item.icon }) }, item.title) }, item.title))) })) }), _jsx("button", { onClick: () => setOpen(!open), className: "h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-800 flex items-center justify-center", children: _jsx(IconLayoutNavbarCollapse, { className: "h-5 w-5 text-neutral-500 dark:text-neutral-400" }) })] }));
};
const FloatingDockDesktop = ({ items, className, }) => {
    let mouseX = useMotionValue(Infinity);
    return (_jsx(motion.div, { onMouseMove: (e) => mouseX.set(e.pageX), onMouseLeave: () => mouseX.set(Infinity), className: cn("mx-auto hidden md:flex h-16 gap-4 items-end  rounded-2xl  dark:bg-neutral-900 px-4 pb-3", className), children: items.map((item) => (_jsx(IconContainer, { mouseX: mouseX, ...item }, item.title))) }));
};
function IconContainer({ mouseX, title, icon, href, }) {
    let ref = useRef(null);
    let distance = useTransform(mouseX, (val) => {
        let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });
    let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
    let heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
    let width = useSpring(widthTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    let height = useSpring(heightTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    let widthIcon = useSpring(widthTransformIcon, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    let heightIcon = useSpring(heightTransformIcon, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    const [hovered, setHovered] = useState(false);
    return (_jsx("a", { href: href, children: _jsxs(motion.div, { ref: ref, style: { width, height }, onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false), className: "aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center relative", children: [_jsx(AnimatePresence, { children: hovered && (_jsx(motion.div, { initial: { opacity: 0, y: 10, x: "-50%" }, animate: { opacity: 1, y: 0, x: "-50%" }, exit: { opacity: 0, y: 2, x: "-50%" }, className: "px-2 py-0.5 whitespace-pre rounded-md bg-gray-100 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs", children: title })) }), _jsx(motion.div, { style: { width: widthIcon, height: heightIcon }, className: "flex items-center justify-center", children: icon })] }) }));
}
