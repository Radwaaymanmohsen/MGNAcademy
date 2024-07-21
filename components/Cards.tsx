import React from "react";

const Cards = () => {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-center p-1 sm:p-2 space-y-6 sm:space-y-0 sm:space-x-20 bg-[#F8F7F3]">
            <div className="h-[10rem] w-[12rem] glow border bg-white rounded-lg border-[#1A9D96] flex flex-col items-center p-4 sm:p-0">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="43"
                    height="43"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0F5E69"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-hand-coins my-4"
                >
                    <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
                    <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                    <path d="m2 16 6 6" />
                    <circle cx="16" cy="9" r="2.9" />
                    <circle cx="6" cy="5" r="3" />
                </svg>
                <p className="middle-text text-center inter-font bold text-[1.15rem] px-4 py-1">
                    Money-back <span className="block sm:inline"> Guarantee</span>
                </p>
            </div>
            <div className="h-[10rem] w-[12rem] glow border bg-white rounded-lg border-[#1A9D96] flex flex-col items-center p-4 sm:p-0">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="43"
                    height="43"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0F5E69"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="my-4 lucide lucide-badge-check"
                >
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                    <path d="m9 12 2 2 4-4" />
                </svg>
                <p className="middle-text text-center inter-font bold text-[1.15rem] px-4 py-1">
                    10+ Years Of <span className="block sm:inline"> Experience </span>
                </p>
            </div>
            <div className="h-[10rem] w-[12rem] glow border bg-white rounded-lg border-[#1A9D96] flex flex-col  items-center p-4 sm:p-2 overflow-visible">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="43"
                    height="43"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0F5E69"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-list-checks my-4 w-10 h-10 sm:w-8 sm:h-8"
                >
                    <path d="m3 17 2 2 4-4" />
                    <path d="m3 7 2 2 4-4" />
                    <path d="M13 6h8" />
                    <path d="M13 12h8" />
                    <path d="M13 18h8" />
                </svg>
                <p className="middle-text text-center inter-font bold text-[1.15rem] px-4 py-1">
                    Structured Advice 
                </p>
            </div>
        </div>
    );
};

export default Cards;
