// "use client"
// import React, { useRef, useEffect } from "react";

// interface HeroV2Props {
//     videoSrc: string;
// }

// const HeroV2: React.FC<HeroV2Props> = ({ videoSrc }) => {
//     const videoRef = useRef<HTMLVideoElement>(null);
//     const parallaxRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         if (videoRef.current) {
//             videoRef.current.playbackRate = 1;
//         }
//     }, []);

//     return (
//         <div
//             className="container mx-auto flex flex-col items-center justify-center space-y-6 py-[4rem] bg-[#F8F7F3]"
//             ref={parallaxRef}
//         >
//             <div className="w-full max-w-4xl aspect-w-16 aspect-h-9 flex flex-col items-center py-2 relative">
//                 <blockquote className="text-xl italic text-gray-800">
//                     “Marriage used to be easy... but times have changed.”
//                 </blockquote>
//                 <h1 className="text-4xl inter-font m-5 px-10 font-bold navy-text">
//                     Struggling To Get Married?
//                 </h1>
//                 <h1 className="text-xl inter-font navy-text">
//                     Watch This Video
//                 </h1>
//                 <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="#0F5E69"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="lucide lucide-chevron-down"
//                 >
//                     <path d="m6 9 6 6 6-6" />
//                 </svg>

//                 <video
//                     ref={videoRef}
//                     className="w-full max-w-2xl h-100 md:h-120 rounded-lg m-9"
//                     src={videoSrc}
//                     autoPlay
//                     loop
//                     muted
//                 />
                
//                 <button className="text-white glow bg-[#1A9D96] border text-lg rounded-lg my-6 w-[20rem] py-3 inter-font">
//                     Watch The First Class For Free!
//                 </button>
                
//                 <h1 className="middle-text font-bold inter-font text-3xl mb-6 mt-10">
//                     What Is This Course All About?
//                 </h1>

//                 <p className="text-xl inter-font ml-5 font-bold navy-text pb-3 mt-3">
//                     Simplifying your marriage search with easy to follow steps
//                     and guidelines for anyone{" "}
//                     <span className="flex flex-col items-center">
//                         struggling to get married or unsure where to start.
//                     </span>
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default HeroV2;

"use client"
import React, { useRef, useEffect } from "react";

interface HeroV2Props {
    videoSrc: string;
}

const HeroV2: React.FC<HeroV2Props> = () => {
    // const videoRef = useRef<HTMLVideoElement>(null);
    // const parallaxRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     if (videoRef.current) {
    //         videoRef.current.playbackRate = 1;
    //     }
    // }, []);

    return (
        <div
            className="container mx-auto flex flex-col items-center justify-center space-y-6 py-[4rem] bg-[#F8F7F3] px-4 sm:px-6 md:px-8"
           
        >
            <div className="w-full max-w-4xl aspect-w-16 aspect-h-9 flex flex-col items-center py-2 relative">
                <blockquote className="text-lg sm:text-xl italic text-gray-800 text-center px-4 sm:px-6 md:px-8">
                    “Marriage used to be easy... but times have changed.”
                </blockquote>
                <h1 className="text-3xl sm:text-4xl inter-font m-3 sm:m-5 px-6 sm:px-10 font-bold navy-text text-center">
                    Struggling To Get Married?
                </h1>
                <h1 className="text-lg sm:text-xl inter-font navy-text text-center">
                    Watch This Video
                </h1>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0F5E69"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-down my-4"
                >
                    <path d="m6 9 6 6 6-6" />
                </svg>

                {/* <video
                    ref={videoRef}
                    className="w-full max-w-full md:max-w-2xl h-auto rounded-lg m-6 md:m-9"
                    src={videoSrc}
                    autoPlay
                    loop
                    muted
                /> */}
                
                <button className="text-white glow bg-[#1A9D96] border text-lg rounded-lg my-4 md:my-6 w-full md:w-[20rem] py-3 inter-font">
                    Watch The First Class For Free!
                </button>
                
                <h1 className="middle-text font-bold inter-font text-2xl sm:text-3xl mb-4 md:mb-6 mt-6 md:mt-10 text-center">
                    What Is This Course All About?
                </h1>

                <p className="text-lg sm:text-xl inter-font font-bold navy-text pb-2 md:pb-3 mt-3 px-4 sm:px-6 md:px-8 text-center">
                    Simplifying your marriage search with easy to follow steps
                    and guidelines for anyone{" "}
                    <span className="block mt-2">
                        struggling to get married or unsure where to start.
                    </span>
                </p>
            </div>
        </div>
    );
};

export default HeroV2;
