'use client'
import React, { useRef } from 'react';
import { GithubFilled, LinkedinFilled, MailOutlined } from '@ant-design/icons';
import Content from './content';

const Sider = () => {
  const contentRef = useRef(null);

  const handleScroll = (e) => {
    const deltaY = e.deltaY;
    const contentElement = contentRef.current;

    if (contentElement) {
      contentElement.scrollTop += deltaY;
    }
  };

  return (
    <div className="flex h-screen" onWheel={handleScroll}>
      {/* Sidebar */}
      <div className="w-2/6 h-screen fixed left-0 top-0 overflow-y-auto">
        <div className='flex justify-center h-full items-center lg:gap-8 sm-gap-2'>
          <div className="space-y-4">
            <div>
              {/* Adjusting icon size based on screen size */}
              <a href="https://github.com/shaistha-samreen" target="_blank" rel="noopener noreferrer">
                <GithubFilled className="lg:text-2xl sm:text-lg text-xl" /> {/* Reduced size on smaller screens */}
              </a>
            </div>
            <div>
              <a href=''>
                <LinkedinFilled className="lg:text-2xl sm:text-lg text-xl" /></a>
            </div>
            <div>
              <a href=''>
                <MailOutlined className="lg:text-2xl sm:text-lg text-xl"/></a>
            </div>
          </div>

          {/* Gray div moved to the middle */}
          <div className='col-span-12 sm:col-span-10 place-self-center text-center sm:text-left'>
            <h1 className='text-white mb-1 text-3xl sm:text-4xl lg:text-4xl font-extrabold'>Hi, Myself <br></br>Shaistha Samreen</h1>
            <p className='text-purple-500 sm:text-base lg:text-xl text-base font-semibold'>And i'm a Frontend Developer</p>
            <button className="bg-gradient-to-br from-cyan-400 via-purple-600 to-pink-400 font-bold border text-xs lg:text-sm text-black rounded-full px-4 py-2 mt-4 hover:shine">Access CV</button>
          </div>
        </div>
      </div>
      <div className="w-4/6 ml-auto overflow-y-auto" ref={contentRef} style={{ scrollbarWidth: 'none' }}>
        <div className="h-screen mb-4 items-center flex flex-col overflow-y-auto">
          <Content />
        </div>
      </div>
    </div>
  );
};

export default Sider;