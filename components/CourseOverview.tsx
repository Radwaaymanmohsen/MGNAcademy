// import React from "react";

// const CourseOverview= () => {
//     return (
//         <div>
//             <div className="flex flex-col items-center pt-7">
//                 <h1 className="middle-text font-bold inter-font text-3xl mb-6 mt-3">
//                     Where Do I Look?
//                 </h1>
//                 {/* <h2 className="text-2xl inter-font middle-text mt-5">
//                     Before we answer this question .. How many ways are there to
//                     find a spouse? <br />
//                     Maybe through ..
//                 </h2> */}

//                 <div className="flex flex-row mt-10 space-x-[5rem]">
//                     <div className="h-[10rem] w-[12rem] glow border bg-white rounded-lg border-[#1A9D96] flex flex-col items-center justify-center">
//                         <span className="text-2xl text-[#0F5E69]">Family?</span>
//                     </div>

//                     <div className="h-[10rem] w-[12rem] glow border bg-white rounded-lg border-[#1A9D96] flex flex-col items-center justify-center">
//                         <span className="text-2xl text-[#0F5E69] ">
//                             University?
//                         </span>
//                     </div>
//                     <div className="h-[10rem] w-[12rem] glow border bg-white rounded-lg border-[#1A9D96] flex flex-col items-center justify-center">
//                         <span className="text-2xl text-[#0F5E69] ">
//                             Social Media?
//                         </span>
//                     </div>
//                 </div>
//                 <div className="flex flex-row space-x-[5rem] mt-9">
//                     <div className="h-[10rem] w-[12rem] glow border bg-white rounded-lg border-[#1A9D96] flex flex-col items-center justify-center">
//                         <span className="text-2xl text-[#0F5E69]  text-center inter-font">
//                             Local Community?
//                         </span>
//                     </div>
//                     <div className="h-[10rem] w-[12rem]  glow border bg-white rounded-lg border-[#1A9D96] flex flex-col items-center justify-center">
//                         <span className="text-2xl text-[#0F5E69]  text-center inter-font">
//                             Apps/ Matchmakers?
//                         </span>
//                     </div>
//                 </div>

//                 <div className="flex flex-col items-start px-[30rem] pt-8 overflow-y-auto">
//                     <h2 className="text-2xl inter-font middle-text mt-8">
//                         All of them are possible options. But the question is,
//                         which one is best for you..? <br />
//                     </h2>
//                     <p className="text-xl inter-font  font-bold navy-text pb-7 mt-5">
//                         This course will provide you with the answers you need.
//                         Giving you clarity on HOW and WHERE to look for marriage
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CourseOverview;

import React from "react";

const CourseOverview = () => {
    return (
        <div>
            <div className="flex flex-col items-center pt-7 px-4 sm:px-8 lg:px-16">
                <h1 className="middle-text font-bold inter-font text-2xl sm:text-3xl mb-6 mt-3">
                    Where Do I Look?
                </h1>

                <div className="flex flex-col sm:flex-row mt-10 sm:space-x-10 space-y-5 sm:space-y-0">
                    <div className="h-[10rem] w-[12rem] glow border bg-white rounded-lg border-[#1A9D96] flex flex-col items-center justify-center">
                        <span className="text-xl sm:text-2xl text-[#0F5E69]">Family?</span>
                    </div>
                    <div className="h-[10rem] w-[12rem] glow border bg-white rounded-lg border-[#1A9D96] flex flex-col items-center justify-center">
                        <span className="text-xl sm:text-2xl text-[#0F5E69]">University?</span>
                    </div>
                    <div className="h-[10rem] w-[12rem] glow border bg-white rounded-lg border-[#1A9D96] flex flex-col items-center justify-center">
                        <span className="text-xl sm:text-2xl text-[#0F5E69]">Social Media?</span>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:space-x-10 space-y-5 sm:space-y-0 mt-9">
                    <div className="h-[10rem] w-[12rem] glow border bg-white rounded-lg border-[#1A9D96] flex flex-col items-center justify-center">
                        <span className="text-xl sm:text-2xl text-[#0F5E69] text-center inter-font">Local Community?</span>
                    </div>
                    <div className="h-[10rem] w-[12rem] glow border bg-white rounded-lg border-[#1A9D96] flex flex-col items-center justify-center">
                        <span className="text-xl sm:text-2xl text-[#0F5E69] text-center inter-font">Apps/ Matchmakers?</span>
                    </div>
                </div>

                <div className="flex flex-col items-center px-4 sm:px-8 lg:px-16">
     
                    <h2 className="text-xl sm:text-2xl inter-font middle-text mt-10">
                        All of them are possible options. But the question is,
                        which one is best for you..? <br />
                    </h2>
                    <p className="w-full max-w-4xl pt-7 inter-font navy-text text-lg font-bold sm:text-xl">
                        This course will provide you with the answers you need.
                        Giving you clarity on HOW and WHERE to look for marriage
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CourseOverview;


