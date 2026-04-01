"use client";

import { useState } from "react";
// import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className="border-b border-stone-200 bg-stone-50 text-stone-900">
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-12">
                <div className="flex items-center justify-between gap-4">
                    <div className="text-lg font-semibold tracking-[0.18em]">
                        whyal
                    </div>
                    <div className="hidden items-center gap-6 text-sm uppercase tracking-[0.18em] md:flex">
                        <a
                            href="https://whyal.github.io/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition hover:text-stone-500"
                        >
                            Personal Site
                        </a>
                        <a
                            href="https://github.com/whyal"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition hover:text-stone-500"
                        >
                            GitHub
                        </a>
                    </div>
                    <button
                        onClick={toggleMenu}
                        className="flex items-center justify-center rounded-full border border-stone-200 p-2 md:hidden"
                        aria-label="Toggle navigation menu"
                        aria-expanded={isOpen}
                    >
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
                {isOpen ? (
                    <div className="mt-4 space-y-3 rounded-[1.5rem] border border-stone-200 bg-white p-4 text-sm uppercase tracking-[0.18em] md:hidden">
                        <a
                            href="https://whyal.github.io/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block transition hover:text-stone-500"
                            onClick={handleLinkClick}
                        >
                            Personal Site
                        </a>
                        <a
                            href="https://github.com/whyal"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block transition hover:text-stone-500"
                            onClick={handleLinkClick}
                        >
                            GitHub
                        </a>
                    </div>
                ) : null}
            </div>
        </nav>
    );
}
