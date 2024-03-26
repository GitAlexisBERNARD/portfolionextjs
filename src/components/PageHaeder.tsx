import React, { CSSProperties, useEffect, useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen])
  
  const overlayStyle: CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#0F0F0F',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
    gap: '4rem', 
    zIndex: 40, 
  };

  return (
    <header className="bg-[#0F0F0F] py-8 lg:px-[100px] px-[50px]">
      <div className="flex items-center justify-between p-5 bg-white rounded-lg bg-opacity-[0.01] px-4">
        <Link href="/">
        <div><svg id="Calque_2" data-name="Calque 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 305.1 186.74" className="w-16 h-16">
    <defs></defs>
    <g id="Calque_1-2" data-name="Calque 1">
        <polygon className="fill-white" points="159.26 186.74 199.7 186.74 109.56 0 66.89 0 159.26 186.74"></polygon>
        <polygon className="fill-white" points="63.11 15.33 84.44 57.56 20.22 185.33 0 144.22 63.11 15.33"></polygon>
        <polygon className="fill-white" points="66.89 109.56 66.89 146.44 128.44 146.44 110.44 109.56 66.89 109.56"></polygon>
        <path className="fill-white" d="m305.1,131.54c0-22.58-13.42-41.98-32.64-50.53,4.15-7.64,6.51-16.32,6.51-25.53C278.97,24.98,253.22.23,221.37.01h-.03S166.19,0,166.19,0h-44.67l89.56,186.74h41.11s-.03-.02-.05-.04c29.4-.9,52.96-25.24,52.96-55.16Zm-57.65,19.2c-.49,0-.97-.04-1.44-.08l.04.08h-10.67l-54.52-113.93h43.52c10.25,0,18.56,8.59,18.56,19.19s-8.31,19.19-18.56,19.19h-12.72l15.8,34.71,20-.34c10.51,0,19.04,9.22,19.04,20.59s-8.52,20.59-19.04,20.59Z"></path>
    </g>
</svg>
</div>
     </Link> 

        <nav>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="z-50 relative">
              <svg className="w-12 h-12 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>

          {isOpen && (
            <div style={overlayStyle}>
              <ul className='pl-16 flex flex-col gap-5'>
                <li>
                  <Link href="/projects" className="text-white text-xl font-ClashGroteskRegular">PROJECTS</Link> 
                </li>
                <li>
                  <Link href="/aboutme"className="text-white text-xl font-ClashGroteskRegular">ABOUT ME</Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white text-xl font-ClashGroteskRegular">CONTACT</Link>
                </li>
              </ul>
            </div>
          )}
          <div className="hidden md:block">
            <ul className="flex space-x-8 text-sm font-medium gap-6">
            <li>
                  <Link href="/projects" className="text-white text-xl font-ClashGroteskRegular">PROJECTS</Link> 
                </li>
                <li>
                  <Link href="/aboutme"className="text-white text-xl font-ClashGroteskRegular">ABOUT ME</Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white text-xl font-ClashGroteskRegular">CONTACT</Link>
                </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
