"use client"

import React from "react";

const AboutInstructor = () => {
    return (
        <section id='about'>
        <div className="flex flex-col items-center py-9 px-4 sm:px-8 lg:px-16">
            <h1 className="middle-text font-bold inter-font text-2xl sm:text-3xl mt-6">
                About The Instructor
            </h1>
            <p className="w-full max-w-4xl pt-7 inter-font navy-text text-lg sm:text-xl">
                My name is Shoaib, also known as The Sunnah Guy. I’ve been
                mentoring young Muslim men for the past decade, helping them
                navigate the challenges of the western lifestyle while still
                holding onto their faith. <br />
                <br /> In the last 2 years, I’ve had the pleasure of traveling
                all over the world and meeting thousands of young brothers and
                sisters. Through these interactions, I’ve learned a lot about
                the common challenges we all face, especially the challenge of
                marriage. More specifically, the challenge of getting married
                has been the number one topic of every Q&A session. <br />{" "}
                <br />
                As a result, I’ve posted hundreds of videos about marriage and
                the search for marriage on social media, amassing over 100
                million views on this one topic alone. <br /> <br /> I’ve learnt
                that there’s very little guidance and clarity on this topic even
                though it is probably the single most important decision in our
                life. So after years of counselling young men, answering
                thousands of DM’s and giving over a hundred lectures on this
                topic, I’ve decided to compile the most comprehensive and in
                depth guide on how and where to find marriage in the 21st
                century.
            </p>
            <div className="pt-3">
                {/* <button className="text-white glow bg-[#1A9D96] border text-lg rounded-lg my-6 w-full max-w-sm py-3 px-3 inter-font">
                    Know more about the instructor
                </button> */}
                 <blockquote className="text-lg sm:text-xl italic text-gray-800 text-center px-4 sm:px-6 md:px-8">
                    Facing any issues? Contact : info@mgn.network
                </blockquote>
            </div>
        </div>
        </section>
    );
};

export default AboutInstructor;
