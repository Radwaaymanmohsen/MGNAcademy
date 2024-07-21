"use client" 
import React, { useEffect } from 'react';

const VimeoVideo = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://player.vimeo.com/api/player.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
            id="home" className="container mx-auto  flex flex-col items-center justify-center  py-[3rem]  bg-[#F8F7F3] px-4 sm:px-6 md:px-8"
        >
      
    <div className="relative w-full max-w-2xl bg-gray-200 rounded-sm">
     <div className="relative h-0 pb-[56.25%]  ">

    <iframe 
      src="https://player.vimeo.com/video/987189250?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
      style={{
        
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius : '10px',
      }} 

      className='absolute top-0 left-0 w-full h-full'
      frameBorder="0" 
      allow="autoplay; fullscreen; picture-in-picture" 
      allowFullScreen
    ></iframe>                  
    </div>
    </div>
    </div>
  );
};

export default VimeoVideo;
