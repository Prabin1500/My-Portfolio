import { assets, workData } from '@/asstes/assets'
import Image from 'next/image'
import React from 'react'

const Project = () => {
  return (
    <div id='projects' className='w-full px-[12%] py-10 mb-32 scroll-mt-20'>
        <div className='flex flex-col items-center justify-center'>
            <h2 className='text-center text-5xl font-Ovo mx-auto dark:text-white border-b-4 border-b-orange-300'>
            Projects
            </h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                Welcome to my Portfolio. Explore a collection of projects showcasing my expertise
                in Web and Mobile application development.
            </p>
        </div>
        <div className='grid grid-cols-auto gap-2'>
            {workData.map((project, index) => (
                <div className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative group border border-black'
                    key={index} 
                > 
                <Image src={project.bgImage} alt='' className='w-full h-auto' />
                    <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2
                                    py-3 px-5 flex flex-col items-start justify-between duration-500 group-hover:bottom-7'> 
                        <h2 className='font-semibold'>
                            {project.title}
                        </h2>
                        <p className='text-sm text-gray-700'>{project.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Project
