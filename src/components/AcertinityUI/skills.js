import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState, useRef } from 'react';
const skills = [
    { name: 'Figma', percentage: 90 },
    { name: 'Bootstrap', percentage: 99 },
    { name: 'React Js.', percentage: 60 },
    { name: 'HTML/CSS', percentage: 97 },
];
const Skills = () => {
    return (_jsx("div", { className: "flex flex-wrap justify-center space-x-4 md:space-x-24 py-8", children: skills.map((skill, index) => (_jsx(SkillCircle, { skill: skill }, index))) }));
};
const SkillCircle = ({ skill }) => {
    const [count, setCount] = useState(0);
    const [isInView, setIsInView] = useState(false);
    const circleRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                observer.disconnect(); // Stop observing once it's in view
            }
        }, {
            threshold: 0.5, // Trigger when 50% of the component is visible
        });
        if (circleRef.current) {
            observer.observe(circleRef.current);
        }
        return () => observer.disconnect();
    }, []);
    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = skill.percentage;
            const duration = 2000;
            const incrementTime = duration / end;
            const timer = setInterval(() => {
                start += 1;
                setCount(start);
                if (start === end) {
                    clearInterval(timer);
                }
            }, incrementTime);
            return () => clearInterval(timer);
        }
    }, [isInView, skill.percentage]);
    return (_jsxs("div", { ref: circleRef, className: "flex flex-col items-center mb-8 md:mb-0", children: [_jsxs("div", { className: "relative", children: [_jsxs("svg", { className: "w-24 h-24 md:w-36 md:h-36", viewBox: "0 0 36 36", children: [_jsx("path", { className: "text-gray-800", stroke: "currentColor", strokeWidth: "2", fill: "none", d: "M18 2.0845\r\n               a 15.9155 15.9155 0 0 1 0 31.831\r\n               a 15.9155 15.9155 0 0 1 0 -31.831" }), _jsx("path", { className: "text-[#9290C3]", strokeDasharray: `${count}, 100`, stroke: "currentColor", strokeWidth: "1", fill: "none", d: "M18 2.0845\r\n               a 15.9155 15.9155 0 0 1 0 31.831\r\n               a 15.9155 15.9155 0 0 1 0 -31.831" })] }), _jsxs("div", { className: "absolute inset-0 flex items-center justify-center text-white text-lg md:text-xl", children: [count, "%"] })] }), _jsx("span", { className: "text-gray-200 text-sm md:text-lg mt-4", children: skill.name })] }));
};
export default Skills;
