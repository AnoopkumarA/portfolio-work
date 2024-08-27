import { jsx as _jsx } from "react/jsx-runtime";
import { FloatingDock } from "./dock";
import { IconBrandGithub, IconBrandX, IconExchange, } from "@tabler/icons-react";
export function FloatingDockDemo() {
    const links = [
        {
            title: "Aceternity UI",
            icon: (_jsx("img", { src: "https://assets.aceternity.com/logo-dark.png", width: 20, height: 20, alt: "Aceternity Logo" })),
            href: "#",
        },
        {
            title: "Changelog",
            icon: (_jsx(IconExchange, { className: "h-full w-full text-neutral-500 dark:text-neutral-300" })),
            href: "#",
        },
        {
            title: "Twitter",
            icon: (_jsx(IconBrandX, { className: "h-full w-full text-neutral-500 dark:text-neutral-300" })),
            href: "#",
        },
        {
            title: "GitHub",
            icon: (_jsx(IconBrandGithub, { className: "h-full w-full text-neutral-500 dark:text-neutral-300" })),
            href: "#",
        },
    ];
    return (_jsx("div", { className: "flex items-center justify-center h-[35rem] w-full ", children: _jsx(FloatingDock, { mobileClassName: "translate-y-20" // only for demo, remove for production
            , items: links }) }));
}
