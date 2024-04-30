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
      <div className="flex flex-col lg:flex-row h-screen" onWheel={handleScroll} style={{ overflow: 'hidden' }}>
        {/* Sidebar and Content Container */}
        <div className="lg:w-2/6 sm:w-full overflow-y-auto" ref={containerRef} style={{ overflowY: 'auto', scrollbarWidth: 'none', height: '100vh' }}>
          {/* Sidebar */}
          <div className="flex flex-col h-full justify-center items-center lg:items-start">
            <div className='flex flex-col space-y-4 text-center lg:text-left sm:text-center'>
              {/* Icon and Name/Button */}
              <div className='flex flex-col lg:flex-row items-start lg:items-center'>
                {/* Icons */}
                <div className='flex flex-col mb-2 lg:mr-4 lg:mb-0'>
                  {/* Github Icon */}
                  <div className='mb-2'>
                    <a href="https://github.com/shaistha-samreen" target="_blank" rel="noopener noreferrer">
                      <GithubFilled className="lg:text-2xl sm:text-lg text-xl mr-2" />
                    </a>
                  </div>
                  {/* LinkedIn Icon */}
                  <div className='mb-2'>
                    <a href=''>
                      <LinkedinFilled className="lg:text-2xl sm:text-lg text-xl mr-2" />
                    </a>
                  </div>
                  {/* Mail Icon */}
                  <div className='mb-2'>
                    <a href=''>
                      <MailOutlined className="lg:text-2xl sm:text-lg text-xl mr-2"/>
                    </a>
                  </div>
                </div>
                {/* Name and Button */}
                <div className='flex flex-col'>
                  <div>
                    <h1 className='text-white mb-1 text-3xl sm:text-4xl lg:text-4xl font-extrabold'>Hi, Myself <br />Shaistha Samreen</h1>
                    <p className='text-purple-500 sm:text-base lg:text-xl text-base font-semibold'>And I'm a Frontend Developer</p>
                  </div>
                  <button className="bg-gradient-to-br from-cyan-400 via-purple-600 to-pink-400 font-bold border text-xs lg:text-sm text-black rounded-full px-4 py-2 mt-4 lg:w-28">Access CV</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Content Area */}
        <div className="lg:w-4/6 sm:w-full overflow-y-auto" style={{ overflowY: 'auto', scrollbarWidth: 'none' }}>
          <div className="h-screen mb-4 items-center flex flex-col overflow-y-auto">
            <Content />
          </div>
        </div>
      </div>
    );
  };

  export default Sider;
