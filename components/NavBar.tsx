"use client"

import React, { useEffect } from 'react';
import Image from 'next/image';

const NavBar: React.FC = () => {
  useEffect(() => {
   
    const handleScroll = (event: MouseEvent) => {
      event.preventDefault();
      const target = event.currentTarget as HTMLAnchorElement;
      const targetId = target.getAttribute('href')?.substring(1);
      const targetElement = document.getElementById(targetId || '');

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth',
        });
      }
    };

    
    const links = document.querySelectorAll('.nav-link');
    links.forEach((link) => {
      link.addEventListener('click', handleScroll as EventListener);
    });

    
    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', handleScroll as EventListener);
      });
    };
  }, []);

  const handleContactClick = () => {
    window.location.href = 'mailto:info@mgn.network';
  };

  const navigation = [
    { id: '4', title: 'Home', url: '/home' },
    { id: '1', title: 'About', url: '/about' },
    { id: '3', title: 'Contact', url: '#', onClick: handleContactClick },
  ];

  return (
    <div className="w-full top-0 z-50 bg-opacity-65 backdrop-blur-sm lg:bg-opacity-80 lg:backdrop-blur-sm bg-[#F8F7F3] ">
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <nav className="fixed top-0 left-0 right-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent">
          <div className="relative flex items-center justify-between w-full max-w-screen-lg mx-auto">
           
            <a className="block lg:hidden" href="/home">
              <Image
                src="/mgnacademylogo.png"
                width={120}
                height={20}
                alt="MGN Academy Logo"
              />
            </a>

            <div className="hidden lg:flex lg:items-center lg:space-x-6">
              <a className="block w-[16rem] xl:mr-10" href="#home">
                <Image
                  src="/mgnacademylogo.png"
                  width={120}
                  height={20}
                  alt="MGN Academy Logo"
                />
              </a>
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={item.onClick} 
                  className="relative inter-font navy-nav-text text-3xl transition-colors px-6 py-6 md:py-8 lg:text-sm lg:font-semibold lg:leading-5 lg:hover:text-[#1A9D96] xl:px-12 nav-link"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
