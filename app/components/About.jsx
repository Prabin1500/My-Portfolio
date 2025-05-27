import Image from 'next/image'
import React from 'react'
import userImage from '../../assets/UserImage.jpg'
import { infoList } from '@/assets/assets'
import { motion } from "motion/react"
import { FaCss3, FaGithub, FaHtml5, FaJsSquare, FaNodeJs, FaReact } from 'react-icons/fa';

const About = ({isDarkMode}) => {
  return (
    <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity:1}}
      transition={{duration: 1}}
      id='about' 
      className='w-full px-4 md:px-[12%] py-10 mb-32 scroll-mt-20 flex flex-col justify-center'>
      <motion.h2 
        initial={{opacity: 0, y:-20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration: 0.5, delay:0.3}}
        className='text-center text-4xl md:text-6xl font-Ovo mx-auto border-b-4 border-b-orange-300 dark:text-[#08FDD8] dark:border-b-[#08FDD8]'>
          About Me
      </motion.h2>
      <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity:1}}
        transition={{duration: 0.8}}
        className='flex w-full flex-col lg:flex-row items-center justify-center gap-10 md:gap-20 sm:my-10'>

        {/* Text Content - comes first in mobile */}
        <motion.div 
          initial={{opacity: 0}}
          whileInView={{opacity:1}}
          transition={{duration: 0.6, delay: 0.5}}
          className='w-full lg:w-1/2 order-2 lg:order-1'>
            <p className='mb-5 font-Ovo text-lg md:text-xl'>
                I'm Prabin Dhakal, a developer with a background in mechanical engineering and a strong passion 
                for technology and software development. After transitioning into IT, I've worked on a wide range 
                of academic and personal projects involving web development, mobile apps, and database systems.
            </p>
            <p className='mb-5 font-Ovo text-lg md:text-xl'>
                Currently, I'm completing my Bachelor's degree in Information Technology at Metropolia University 
                of Applied Sciences. I've built applications using Java, Kotlin, React, JavaScript, HTML/CSS, SQL, 
                and tools like Firebase, Node.js, and Git. During my internship at Kivapix, I contributed to frontend 
                development using React and TypeScript, and also collaborated with a startup team to bring real ideas to life.
            </p>
            <p className='mb-5 font-Ovo text-lg md:text-xl'>
                I've also worked in a professional lab environment with Microsoft HoloLens, which sharpened my teamwork and 
                quality control skills. I'm always looking to grow, whether it's through learning new technologies or 
                building products that make a difference.
            </p>
            <p className='mb-8 font-Ovo text-lg md:text-xl'>
                I'm excited to find opportunities where I can contribute to meaningful projects, keep learning, and grow 
                as a developer.
            </p>
            <motion.ul 
              initial={{opacity: 0}}
              whileInView={{opacity:1}}
              transition={{duration: 0.8, delay: 0.8}}
              className='grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10'>
                {infoList.map(({icon, iconDark, title, description}, index) => (
                    <motion.li 
                      initial={{ x: index % 2 === 0 ? -110 : 110, opacity: 0 }}
                      whileInView={{x:0, opacity:1}}
                      transition={{duration: 0.5, delay: 0.8}}
                      className='border-[0.55px] border-gray-400 rounded-xl p-4 md:p-6 cursor-pointer 
                        hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black
                        dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
                        key={index} >
                        <Image className='w-6 md:w-7 mt-2 md:mt-3' src={isDarkMode ? iconDark : icon} alt={title} />
                        <h3 className='my-2 md:my-4 font-semibold text-gray-700 dark:text-white text-sm md:text-base'>{title}</h3>
                        <p className='text-gray-600 text-xs md:text-sm dark:text-white/80'>{description}</p>
                    </motion.li>
                ))}
            </motion.ul>
        </motion.div>

        {/* Cube Spinner - comes second in mobile */}
        <div className='w-full lg:w-1/2 flex items-center justify-center order-1 mt-20 lg:mt-1 lg:order-2'>
          <div className='stage-cube-cont w-[250px] h-[250px] md:w-[400px] md:h-[400px] relative'>
            <div className='cubespinner'>
              <div className='face1'>
                <FaNodeJs color='#DD0031' size={60} className='w-10 h-10 md:w-16 md:h-16' />
              </div>
              <div className='face2'>
                <FaHtml5 color='#F06529' size={60} className='w-10 h-10 md:w-16 md:h-16' />
              </div>
              <div className='face3'>
                <FaGithub color='#EC4D28' size={60} className='w-10 h-10 md:w-16 md:h-16' />
              </div>
              <div className='face4'>
                <FaJsSquare color='#EFD81D' size={60} className='w-10 h-10 md:w-16 md:h-16'/>
              </div>
              <div className='face5'>
                <FaCss3 color='#28a4d9' size={60} className='w-10 h-10 md:w-16 md:h-16'/>
              </div>
              <div className='face6'>
                <FaReact color='#5ed4f4' size={60} className='w-10 h-10 md:w-16 md:h-16'/>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default About