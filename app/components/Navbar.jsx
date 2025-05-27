import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import arrowIcon from '../../public/assets/images/arrow-icon.png';
import bgheader from '../../public/assets/images/header-bg-color.png';
import moonIcon from '../../public/assets/images/moon_icon.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs' 
import { assets } from '@/public/assets/images/assets';

const Navbar = ({isDarkMode, setIsDarkMode}) => {
    const [isScroll, setIsScroll] = useState(false);
    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }
    useEffect (() => {
        window.addEventListener('scroll', () => {
            if(scrollY > 50){
                setIsScroll(true)
            }else {
                setIsScroll(false)
            }
        })
    }, [])

    return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <Image src={bgheader} alt='header-bg' className='w-full' />
    </div>
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 
        ${isScroll ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-md dark:bg-darkTheme dark:shadow-white/20' : ''}`}>
                <a href='#' className='cursor-pointer'>
                    <svg 
                        width="180" 
                        height="60" 
                        viewBox="0 0 300 80" 
                        className="name-svg"
                        style={{ overflow: 'visible' }}
                    >
                        <text
                            x="50%"
                            y="50%"
                            dominantBaseline="middle"
                            textAnchor="middle"
                            style={{
                                fontFamily: "'Allura', cursive",
                                fontSize: '4rem',
                                fill: isDarkMode ? '#ffffff' : '#2F4F4F',
                                fontWeight: 'normal',
                                letterSpacing: '1px',
                                transition: 'fill 0.3s ease'
                            }}
                        >
                            Prabin.
                        </text>
                    </svg>
                </a>
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full 
            px-12 py-3 ${isScroll ? '' : 'bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent'}`}>
            <li><a className='font-Ovo' href='#top'>Home</a></li>
            <li><a className='font-Ovo' href='#about'>About</a></li>
            <li><a className='font-Ovo' href='#projects'>Projects </a></li>
            <li><a className='font-Ovo' href='#skills'>Skills</a></li>
            <li><a className='font-Ovo' href='#experience'>Experience</a></li>
            <li><a className='font-Ovo' href='#contact'>Contact Me</a></li>
        </ul>
        <div className='flex items-center gap-4'>
            <button onClick={() => setIsDarkMode(prev => !prev)}>
                <Image src={isDarkMode ? assets.sun_icon : moonIcon}  alt='MoonIcon' className='w-6'/>
            </button>
            <a href='#contact' className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500
            rounded-full ml-4 font-Ovo dark:border-white/50'>
                Contact 
                <Image src={ isDarkMode ? assets.arrow_icon_dark : arrowIcon} alt='arrow' className='w-3' /> </a>
            <button className='block md:hidden ml-3' onClick={openMenu}>
                <Image src={isDarkMode ? assets.menu_white : assets.menu_black}  alt='HamburgerMenu' className='w-6'/>
            </button>
        </div>

        {/* -- ----- Mobile Menu ----- -- */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
            top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white'>
            <div className='absolute right-6 top-6' onClick={closeMenu}>
                <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='CloseButton' className='w-5 cursor-pointer' />
            </div>
            <li><a className='font-Ovo' onClick={closeMenu} href='#top'>Home</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href='#about'>About</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href='#projects'>Projects </a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href='#skills'>Skills</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href='#experience'>Experience</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href='#contact'>Contact Me</a></li>
        </ul>
      </nav>
              {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0 '>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                    <a className='flex justify-between items-center w-full text-white p-3 ml-3 font-Ovo'
                    href="https://www.linkedin.com/in/prabin-dhakal7/" target="blank">
                        LinkedIn <FaLinkedin size={30}/>
                    </a>
                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-white p-3 ml-3 font-Ovo'
                    href="https://github.com/Prabin1500" target="blank">
                        Github <FaGithub size={30}/>
                    </a>
                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full text-white p-3 ml-3 font-Ovo'
                    href="/PrabinDhakalResume.pdf"  target="blank" rel="noopener noreferrer">
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>

                </li>
            </ul>
            
        </div>
    </>
  )
}

export default Navbar
