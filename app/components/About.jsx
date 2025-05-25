import Image from 'next/image'
import React from 'react'
import userImage from '../../asstes/UserImage.jpg'
import { infoList } from '@/asstes/assets'
import { motion } from "motion/react"

const About = ({isDarkMode}) => {
  return (
    <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity:1}}
      transition={{duration: 1}}
      id='about' 
      className='w-full px-[12%] py-10 mb-32 scroll-mt-20'>
      <motion.h2 
        initial={{opacity: 0, y:-20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration: 0.5, delay:0.3}}
        className='text-center text-6xl font-Ovo'>
          About Me
      </motion.h2>
      <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity:1}}
        transition={{duration: 0.8}}
        className='flex w-full flex-col lg:flex-row items-center gap-20 my-10'>
        <motion.div 
          initial={{x:-100, opacity: 0, scale:0.8}}
          whileInView={{x:0, opacity:1, scale: 1}}
          transition={{duration: 0.6, delay:0.4}}
          className='w-64 sm:w-80 rounded-3xl max-w-none'>
            <Image src={userImage} alt='UserImage' className='w-full rounded-3xl' />
        </motion.div>
        <motion.div 
          initial={{opacity: 0}}
          whileInView={{opacity:1}}
          transition={{duration: 0.6, delay: 0.5}}
          className='flex-1'>
            <p className='mb-10 max-w-2xl font-Ovo text-xl'>
                Passionate and driven software engineering student focused on building 
                innovative web and mobile solutions. Skilled in coding, problem-solving, 
                and collaborating in team environments.
            </p>
            <motion.ul 
              initial={{opacity: 0}}
              whileInView={{opacity:1}}
              transition={{duration: 0.8, delay: 0.8}}
              className='grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl'>
                {infoList.map(({icon, iconDark, title, description}, index) => (
                    <motion.li 
                      initial={{ x: index % 2 === 0 ? -110 : 110, opacity: 0 }}
                      whileInView={{x:0, opacity:1}}
                      transition={{duration: 0.5, delay: 0.8}}
                      className='border-[0.55px] border-gray-400 rounded-xl p-6 cursor-pointer 
                        hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black
                        dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
                        key={index} >
                        <Image className='w-7 mt-3' src={isDarkMode ? iconDark : icon} alt={title} />
                        <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                        <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                    </motion.li>
                ))}
            </motion.ul>
            <h4></h4>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About
