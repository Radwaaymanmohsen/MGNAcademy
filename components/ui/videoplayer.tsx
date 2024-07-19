// // components/VimeoEmbed.tsx
// 'use client';
// import React from 'react';

// interface VimeoEmbedProps {
//   videoId: string;
//   className?: string;
// }

// const VimeoEmbed: React.FC<VimeoEmbedProps> = ({ videoId, className }) => {
//   return (
//     <div className={`relative overflow-hidden pb-[66.25%]  rounded-lg h-0 ${className}`}>
//       <iframe
//         src={`https://player.vimeo.com/video/${videoId}`}
//         className="absolute top-0 left-0 w-full h-full rounded-lg"
//         frameBorder="0"
//         allow="autoplay; fullscreen; picture-in-picture"
//         allowFullScreen
//         title="Vimeo video"
//         style={{ borderRadius: 'inherit' }}
//       ></iframe>
//       <div style="padding:56.25% 0 0 0;position:relative;"><iframe 
//       src="https://player.vimeo.com/video/983265022?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
//       frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" 
//       title="MGNA_Intro">
//       </iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
//     </div>
//   );
// };

// export default VimeoEmbed;
'use client';
// import React, { useEffect, useRef } from 'react';

// const VimeoEmbed: React.FC = () => {
//   const iframeRef = useRef<HTMLIFrameElement>(null);

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = "https://player.vimeo.com/api/player.js";
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
//       <iframe
//         ref={iframeRef}
//         src="https://player.vimeo.com/video/983265022?h=d25103bf36&title=0&byline=0&portrait=0"
//         style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
//         frameBorder="0"
//         allow="autoplay; fullscreen; picture-in-picture"
//         allowFullScreen
//       ></iframe>
//     </div>
//   );
// };

// export default VimeoEmbed;
// import React, { useEffect, useRef } from 'react';

// const VimeoEmbed: React.FC = () => {
//   const iframeRef = useRef<HTMLIFrameElement>(null);

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = "https://player.vimeo.com/api/player.js";
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div>
//     <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
//       {/* <iframe
//         ref={iframeRef}
//         src="https://player.vimeo.com/video/983265022?h=d25103bf36&title=0&byline=0&portrait=0"
//         style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
//         frameBorder="0"
//         allow="autoplay; fullscreen; picture-in-picture"
//         allowFullScreen
//       ></iframe>
//       <div style={{padding: '56.25% 0 0 0', position:'relative'}}> */}
//     {/* <iframe src="https://player.vimeo.com/video/983265022?h=d25103bf36&title=0&byline=0&portrait=0" style={{position:'absolute',top:0,left:0,width:100%,height:100%}} 
//     frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen>
// </iframe></div><script src="https://player.vimeo.com/api/player.js"></script> */}
// <iframe 
//   src="https://player.vimeo.com/video/983265022?h=d25103bf36&title=0&byline=0&portrait=0" 
//   style={{
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%'
//   }} 
//   frameBorder="0" 
//   allow="autoplay; fullscreen; picture-in-picture" 
//   allowFullScreen
// ></iframe>
// <script src="https://player.vimeo.com/api/player.js"></script>

//     </div>
    
//     </div>
//   );
// };

// export default VimeoEmbed;

// <div style="padding:56.25% 0 0 0;position:relative;">
//     <iframe src="https://player.vimeo.com/video/983265022?h=d25103bf36&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" 
//     frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen>
// </iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

'use client '; 
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
     <div className="relative  h-0 pb-[56.25%]  ">

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
