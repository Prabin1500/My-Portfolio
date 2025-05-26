import { assets, workData } from '@/asstes/assets'
import Image from 'next/image'
import React from 'react'

const Project = () => {
  return (
    <div id='projects' className='w-full px-[12%] py-10 mb-32 scroll-mt-20'>
        <div className='flex flex-col items-center justify-center'>
            <h2 className='text-center text-5xl font-Ovo mx-auto border-b-4 border-b-orange-300 dark:text-[#08FDD8] dark:border-b-[#08FDD8]'>
            Projects
            </h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                Welcome to my Portfolio. Explore a collection of projects showcasing my expertise
                in Web and Mobile application development.
            </p>
        </div>
        <div className='grid grid-cols-auto gap-6'>
            {workData.map((project, index) => (
            <div 
                key={index}
                className="group cursor-pointer transition-all duration-300 hover:scale-[1.02] shadow-md border p-4 rounded-md"
                >
                {/* Title above the image box */}
                <h2 className="text-xl font-bold text-center font-Ovo mb-3 text-gray-800 dark:text-white">
                    {project.title}
                </h2>
            
                {/* Image container with shadow and hover effects */}
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow 
                    duration-300 border border-gray-200 dark:border-gray-700">
                    <Image 
                    src={project.bgImage} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-120"
                    width={500}
                    height={500}
                    />
                    
                    {/* Overlay with description */}
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100
                        transition-all duration-700 p-4 flex flex-col justify-between transform scale-0 group-hover:scale-100 origin-center">
                        <div className="mb-4">
                            <p className="text-white text-sm md:text-base">
                            {project.description}
                            </p>
                        </div>
                        <hr className="border-t border-white w-full origin-left" />

                        <div className="p-2">
                            <div className="flex flex-wrap gap-2 justify-between">
                                {project.tools.map((tool, i) => (
                                    <div key={i} className="w-8 h-8 relative">
                                    <Image 
                                        src={tool} 
                                        alt="Tool icon"
                                        className="object-contain"
                                        fill
                                    />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <hr className="border-t border-white w-full origin-left" />

                        <div className="flex gap-3 p-2">
                            <a href={project.liveUrl} target='_blank' className="flex-1 bg-white text-gray-900
                                 hover:bg-gray-100 text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                            Live Demo
                            </a>
                            <a href={project.url} target='_blank' className="flex-1 bg-transparent border border-white 
                                text-white hover:bg-white/10 text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                            View Code
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Project
