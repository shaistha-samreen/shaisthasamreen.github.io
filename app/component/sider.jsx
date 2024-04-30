'use client'
import React, { useRef } from 'react';
import { GithubFilled, LinkedinFilled, MailOutlined } from '@ant-design/icons';
import Content from './content';

const Sider = () => {
  const containerRef = useRef(null);

  const handleScroll = (e) => {
    const deltaY = e.deltaY;
    const containerElement = containerRef.current;

    if (containerElement) {
      containerElement.scrollTop += deltaY;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen justify-center items-center" onWheel={handleScroll} style={{ overflow: 'hidden' }}>
      {/* Sidebar and Content Container */}
      <div className="lg:w-2/6 sm:w-full w-full overflow-y-auto" ref={containerRef} style={{ overflowY: 'auto', scrollbarWidth: 'none', height: '30vh' }}>
        {/* Sidebar */}
        <div className="flex flex-col h-full justify-center">
          <div className='flex flex-col space-y-4 text-left lg:text-left sm:text-left'>
            {/* Icon and Name/Button */}
            <div className='flex flex-row lg:flex-row lg:justify-end items-center lg:gap-6 gap-8 sm:gap-8 sm:justify-center justify-center'>
              {/* Icons */}
              <div className='lg:flex lg:flex-col lg:gap-4 sm:gap-3 gap-3 justify-center sm:justify-center '>
                {/* Github Icon */}
                <div className='sm:mb-2 mb-2'> 
                  <a href="https://github.com/shaistha-samreen" target="_blank" rel="noopener noreferrer">
                    <GithubFilled className="sm:text-2xl lg:text-3xl text-2xl sm:text-gray-900 lg:text-gray-200 text-gray-900"/>
                  </a>
                </div>
                {/* LinkedIn Icon */}
                <div className='sm:mb-2 mb-2'>       
                            <a href=''> <LinkedinFilled className="sm:text-2xl lg:text-3xl text-2xl sm:text-gray-900 text-gray-900 lg:text-gray-200"/>
                  </a>
                </div>
                {/* Mail Icon */}
                <div className='sm:mb-2 mb-2'> 
                                  <a href=''>
                    <MailOutlined className="sm:text-2xl lg:text-3xl text-2xl sm:text-gray-900 text-gray-900 lg:text-gray-200"/>
                  </a>
                </div>
              </div>
              {/* Name and Button */}
              <div className='flex flex-col lg:gap-4 sm:gap-2 gap-2  justify-center items-center'>
                <div className='flex flex-col lg:gap-4 sm:gap-2 gap-2'>
                  <h1 className='text-white  sm:text-2xl lg:text-4xl text-2xl font-extrabold'>Hi, Myself <br />Shaistha Samreen</h1>
                  <p className='text-purple-500 sm:text-sm lg:text-base text-sm font-semibold'>And I'm a Frontend Developer</p>
                  <button className="bg-gradient-to-br from-cyan-400 via-purple-600 to-pink-400 rounded-full border-white text-black border font-bold lg:text-sm sm:text-xs text-xs button h-8 lg:w-24 sm:w-60 w-60" >Access CV</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Content Area */}
      <div className="lg:w-4/6 sm:w-full w-full overflow-y-auto" style={{ overflowY: 'auto', scrollbarWidth: 'none' }}>
        <div className="h-screen mb-4 items-center flex flex-col overflow-y-auto lg:p-6 p-2 sm:p-2">
          <Content />
        </div>
      </div>
    </div>
  );
};

export default Sider;
