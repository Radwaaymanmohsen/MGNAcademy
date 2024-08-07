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
    <div className="relative w-full max-w-2xl bg-gray-200 rounded-sm">
     <div className="relative h-0 pb-[56.25%]  ">

    <iframe 
      src="https://player.vimeo.com/video/983265022?h=d25103bf36&title=0&byline=0&portrait=0" 
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
  );
};

export default VimeoVideo;
