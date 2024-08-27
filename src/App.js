import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/home";
const about = () => {
    return (_jsx(_Fragment, { children: _jsx("div", { className: "bg-[#020516] ", children: _jsxs(HashRouter, { children: [_jsx(Navbar, {}), _jsx(Routes, { children: _jsx(Route, { path: "/", element: _jsx(Home, {}) }) })] }) }) }));
};
export default about;
