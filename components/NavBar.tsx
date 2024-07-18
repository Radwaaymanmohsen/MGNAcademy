"use client";

import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
import Image from 'next/image';

const NavBar: React.FC = () => {
  const [mounted, setMounted] = useState(false);
//   const { asPath } = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navigation = [
    {
      id: '4',
      title: 'Home',
      url: '/#home',
    },
    {
      id: '0',
      title: 'MGN Community',
      url: '/#features',
    },
    {
      id: '1',
      title: 'About',
      url: '/#pricing',
    },
    {
      id: '3',
      title: 'Contact',
      url: '/#how-to-use',
    },
  ];

//   if (!mounted) {
//     return null; // Or return a loading spinner
//   }

  return (
    <div className="w-full top-0 z-50 bg-opacity-65 backdrop-blur-sm lg:bg-opacity-80 lg:backdrop-blur-sm">
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <nav className="hidden fixed top-[5erm] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent">
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
           
             <a className="block w-[16rem] xl:mr-10 href=#hero mb-4 lg:mb-0 lg:mr-16">
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
                className={`block relative inter-font navy-nav-text text-3xl transition-colors px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-sm lg:font-semibold lg:leading-5 lg:hover:text-[#1A9D96] xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
