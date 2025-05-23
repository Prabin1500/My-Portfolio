import Image from 'next/image'
import React from 'react'
import userImage from '../../asstes/UserImage.jpg'
import { infoList } from '@/asstes/assets'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h2 className='text-center text-6xl font-Ovo'>About Me</h2>
      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
            <Image src={userImage} alt='UserImage' className='w-full rounded-3xl' />
        </div>
        <div className='flex-1'>
            <p className='mb-10 max-w-2xl font-Ovo'>
                Passionate and driven software engineering student focused on building 
                innovative web and mobile solutions. Skilled in coding, problem-solving, 
                and collaborating in team environments.
            </p>
            <ul className='grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl'>
                {infoList.map(({icon, iconDark, title, description}, index) => (
                    <li className='border-[0.55px] border-gray-400 rounded-xl p-6 cursor-pointer 
                        hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black'
                        key={index} >
                        <Image className='w-7 mt-3' src={icon} alt={title} />
                        <h3 className='my-4 font-semibold'>{title}</h3>
                        <p className='text-gray-600 text-sm'>{description}</p>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  )
}

export default About
