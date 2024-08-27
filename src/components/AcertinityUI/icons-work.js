import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Services = () => {
    const services = [
        {
            name: 'Web Design',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            name: 'Web Design',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            name: 'Web Design',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
    ];
    return (_jsxs("div", { children: [_jsx("h2", { className: "text-section-title font-light text-white mb-6 md:text-4xl text-3xl", children: "Services" }), services.map((service, index) => (_jsxs("div", { className: "mb-4 flex items-start  relative top-4", children: [_jsx("div", { className: "mr-4 text-[#9290C3]", children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6 mt-2", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }) }) }), _jsxs("div", { children: [_jsx("h3", { className: "text-item-title text-[#9290C3] font-normal md:text-xl", children: service.name }), _jsx("p", { className: "text-description text-gray-300", children: service.description })] })] }, index)))] }));
};
export default Services;
