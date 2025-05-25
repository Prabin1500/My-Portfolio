import { toolsData } from '@/asstes/assets'
import Image from 'next/image'
import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='w-full px-[12%] py-10 mb-32 scroll-mt-20 flex flex-col items-center justify-center'>
        <h2 className='text-center text-6xl font-Ovo mx-auto dark:text-white border-b-4 border-b-orange-300'>Skills</h2>
        <h4 className='mt-6 text-gray-700 text-center text-xl font-Ovo dark:text-white/80'>Programming languages and tools</h4>
        <div className='shadow-lg p-4 rounded-md'>
          <ul className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-6 my-10'>
              {toolsData.map(({icon, name}, index) =>(
                  <li className='flex flex-col items-center justify-center w-24 sm:w-28 aspect-square 
                      border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                      key={index}>
                      <Image src={icon} alt='Tool' className='w-5 sm:w-12' />
                      <p className='mt-3 dark:text-white'>{name}</p>
                  </li>
              ))}
          </ul>
        </div>

    </div>
  )
}

export default Skills
