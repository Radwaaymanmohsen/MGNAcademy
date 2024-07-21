"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const FemaleQuestions = [
    "“How well do I need to know him before marrying him?”",
    "“How can I approach him without degrading myself?”",
    "“How to meet and talk before marriage in a halal manner?”",
    "“How well do I need to know him before marrying him?”",
    "“I'm stuck, I can't find anyone, what are my options?”",
    "“How can I approach him without degrading myself?”",
    "“How do I introduce a guy I've met to my father?”",
    "“How to make my haram relationship halal?”",
    "“How to deal with stubborn family?”",
];
const MaleQuestions = [
    "“How to meet and talk before marriage in a halal manner?”",
    "“I'm stuck, I can't find anyone, what are my options?”",
    "“How to make my haram relationship halal?”",
    "“How to approach a girl in a halal way?”",
    "“How to deal with stubborn family?”",
];

const Questions = () => {
    const [currentFQuestion, setCurrentFQuestion] = useState(0);

    useEffect(() => {
        const Finterval = setInterval(() => {
            setCurrentFQuestion((prevFQuestion) =>
                prevFQuestion === FemaleQuestions.length - 1
                    ? 0
                    : prevFQuestion + 1
            );
        }, 2000);

        return () => clearInterval(Finterval);
    }, []);

    const [currentMQuestion, setCurrentMQuestion] = useState(0);

    useEffect(() => {
        const Minterval = setInterval(() => {
            setCurrentMQuestion((prevMQuestion) =>
                prevMQuestion === MaleQuestions.length - 1
                    ? 0
                    : prevMQuestion + 1
            );
        }, 2000);

        return () => clearInterval(Minterval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center px-4 py-4 sm:px-8 lg:px-16">
            <h1 className="middle-text font-bold inter-font text-xl sm:text-2xl text-center mb-6 mt-4 sm:mt-8">
                In This Course, We Will Answer The Following Questions
            </h1>

            <motion.div
                key="male-card"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="w-full max-w-md p-3 italic rounded-lg shadow-md text-center text-[#2967ae] mb-6"
            >
                <h1 className="text-lg sm:text-2xl mb-4">
                    {MaleQuestions[currentMQuestion]}
                </h1>
            </motion.div>
            <motion.div
                key="female-card"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="w-full max-w-md p-3 italic rounded-lg shadow-md text-center text-pink-400 mb-6"
            >
                <h1 className="text-lg sm:text-2xl ">
                    {FemaleQuestions[currentFQuestion]}
                </h1>
            </motion.div>

 <div className="flex flex-col items-center px-4 sm:px-8 lg:px-16">
     <p className="w-full max-w-4xl pt-7 inter-font navy-text text-lg  sm:text-xl">
        Choosing the right spouse can be a hard process, it’s one of
        the most important decisions we will ever make. BUT there’s
        very little direction and clarity on how to make the right
        choice. <br /> <br />
        My goal in this course is to bring clarity and direction to
        your marriage search, helping you navigate the hundreds of
        different scenarios and challenges you might face when
        looking for a spouse.
    </p>
</div>
        </div>
    );
};

export default Questions;


