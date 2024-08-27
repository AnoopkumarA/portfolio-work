import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const WorkExperience = () => {
    const experiences = [
        {
            company: 'Pillzen Pvt. Ltd',
            position: 'Front-End Web Developer',
            period: '2023 - Present',
        },
        {
            company: 'Pillzen Pvt. Ltd',
            position: 'Front-End Web Developer',
            period: '2023 - Present',
        },
        {
            company: 'Pillzen Pvt. Ltd',
            position: 'Front-End Web Developer',
            period: '2023 - Present',
        },
    ];
    return (_jsxs("div", { className: "mb-8", children: [_jsx("h2", { className: "text-section-title font-light text-white mb-6 md:text-4xl text-3xl", children: "Work Experience" }), experiences.map((exp, index) => (_jsxs("div", { className: "mb-4 flex items-start relative top-4 ", children: [_jsx("div", { className: "mr-4 text-yellow-400", children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 mt-2", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }) }) }), _jsxs("div", { children: [_jsx("h3", { className: "text-item-title text-yellow-400 font-light md:text-xl ", children: exp.company }), _jsx("p", { className: "text-item-subtitle text-white", children: exp.position }), _jsx("p", { className: "text-item-period text-gray-400 italic", children: exp.period })] })] }, index)))] }));
};
export default WorkExperience;
