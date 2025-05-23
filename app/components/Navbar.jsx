import React, { useRef } from 'react';
import Image from 'next/image';
import logo11 from '../../asstes/logo11.png';
import arrowIcon from '../../asstes/arrow-icon.png';
import bgheader from '../../asstes/header-bg-color.png';
import moonIcon from '../../asstes/moon_icon.png';
import hamburgurMenu from '../../asstes/menu-black.png';
import closeButton from '../../asstes/close-black.png';

const Navbar = () => {
    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image src={bgheader} alt='header-bg' className='w-full' />
    </div>
      <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50'>
        <a href=''>
            <Image alt='Name logo' src={logo11} className='w-28 cursor-pointer mr-14'/>
        </a>
        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full 
            px-12 py-3 bg-white shadow-sm bg-opacity-50'>
            <li><a className='font-Ovo' href='#top'>About</a></li>
            <li><a className='font-Ovo' href='#projects'>Projects </a></li>
            <li><a className='font-Ovo' href='#skills'>Skills</a></li>
            <li><a className='font-Ovo' href='#experience'>Experience</a></li>
            <li><a className='font-Ovo' href='#contact'>Contact Me</a></li>
        </ul>
        <div className='flex items-center gap-4'>
            <button>
                <Image src={moonIcon}  alt='MoonIcon' className='w-6'/>
            </button>
            <a href='#contact' className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500
            rounded-full ml-4 font-Ovo'>Contact <Image src={arrowIcon} alt='arrow' className='w-3' /> </a>
            <button className='block md:hidden ml-3' onClick={openMenu}>
                <Image src={hamburgurMenu}  alt='HamburgerMenu' className='w-6'/>
            </button>
        </div>

        {/* -- ----- Mobile Menu ----- -- */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
            top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
            <div className='absolute right-6 top-6' onClick={closeMenu}>
                <Image src={closeButton} alt='CloseButton' className='w-5 cursor-pointer' />
            </div>
            <li><a className='font-Ovo' onClick={closeMenu} href='#top'>About</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href='#projects'>Projects </a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href='#skills'>Skills</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href='#experience'>Experience</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href='#contact'>Contact Me</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
