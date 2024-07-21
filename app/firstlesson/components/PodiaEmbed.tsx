"use client"
import React, { useEffect, useRef } from 'react';

const PodiaEmbed: React.FC = () => {
  const anchorRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.podia.com/embeds.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    //  <a
    //   href="https://www.thesunnahcampus.com/da746125-37d7-4be6-873b-44f50478586d"
    //   data-podia-embed="link"
    //   data-text="Get Access To The Full Course"
    //   ref={anchorRef}
    //   className='text-white glow bg-[#1A9D96] border text-lg rounded-lg my-6 w-full max-w-sm py-3 text-center px-3 inter-font '
    // >
    //   Get Access To The Full Course
    // </a>
    <>
    <blockquote className="text-lg sm:text-xl  text-red-500 text-center px-4 sm:px-6 md:px-8">
                    Enjoyed this class and want to learn more? Well, this is just the start. <br /> Get access to the full course with <span className='text-red-500'>over 50+</span> classes.
                     <br/> Use [CODE] for <span className='text-red-500'>50% off</span>. 
Hurry, limited to the first 100 ONLY!
                </blockquote>
         <a
      href="https://muslimglobalnetwork.podia.com/finding-marriage-made-simple"
      data-podia-embed="link"
      data-text="Get Access To The Full Course"
      ref={anchorRef}
      className='text-white glow bg-[#1A9D96] border text-lg rounded-lg my-6 w-full max-w-sm py-3 text-center px-3 inter-font '
    >
      Get Access To The Full Course
    </a>
    </>
  );
};
export default PodiaEmbed;
