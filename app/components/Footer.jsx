import { assets } from '@/public/assets/images/assets'
import Image from 'next/image'
import React from 'react'
import { SocialIcon } from 'react-social-icons';

const Footer = ({isDarkMode}) => {
  return (
    <div className='py-10 mt-32'>
      <div className='text-center'>
        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={assets.mailIcon} alt='' className='w-6' />
            dhakalprabin7@gmail.com
        </div>
      </div>
      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>Prabin Dhakal © 2025. All right reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li className='flex justify-between items-center hover:scale-110'>
                <a href='https://github.com/Prabin1500' target='_blank'></a>
                <SocialIcon network="github"  fgColor='#FFFFFF'/>
            </li>

            <li className='flex justify-between items-center hover:scale-110'>
                <a href='https://linkedin.com/in/prabin-dhakal7/' target='_blank'></a>
                <SocialIcon network="linkedin" bgColor='#0075B5' fgColor='#FFFFFF'/>
            </li>

            <li className='flex justify-between items-center hover:scale-110'>
                <a  href='https://www.facebook.com/prabin.dhakal.1654/' target='blank'>
                </a>
                <SocialIcon network="facebook" bgColor='#3333EE' fgColor='#FFFFFF'/>
            </li>

            <li className='flex justify-between items-center hover:scale-110'>
                <a href='https://twitter.com/Prabindhakal6' target='blank'>
                </a>
                <SocialIcon network="twitter" bgColor='#00acee' fgColor='#FFFFFF'/>
            </li>

            <li className='flex justify-between items-center hover:scale-110'>
                <a href='https://www.instagram.com/prabindhakal9/' target='blank'>
                </a>
                <SocialIcon network="instagram" fgColor='#FFFFFF'/>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
