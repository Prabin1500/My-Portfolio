import React from 'react';
import { motion } from "motion/react"

const timelineData = [
  {
    title: "Intern / Full Stack Developer",
    location: "Espoo, FI",
    company: "KivaPix",
    duration: "Dec 2024 - March 2025",
    tasks: [
      "Developed a responsive web application to manage events using React.js and Tailwind CSS.",
      "Collaborated with a team of 3 to implement a RESTful API, ensuring seamless data flow between the frontend and backend.",
      "Participated in code review and feedback, improving code quality and development efficiency.",
      "Optimised database query in Firebase, reducing the response time by 15%.",
    ]
  },
  {
    title: "Lab Technician",
    location: "Espoo, FI",
    company: "Microsoft Hololens",
    duration: "2021 - 2024",
    tasks: [
      "Collaborated with engineering teams to troubleshoot hardware and software issues during production.",
      "Maintained detailed records of test results, assembly steps, and device performance.",
      "Implemented quality control measures to meet the microsoft's standard.",
      "Supported production flow by handling component inventory, setup, and maintenance of lab equipment."
    ]
  }
];

const Experience = ({isDarkMode}) => {
  return (
    <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity:1}}
      transition={{duration: 1}}
      id='experience' className="w-full px-[12%] py-10 mb-32 scroll-mt-20 flex flex-col justify-center">
      <motion.h2 
        initial={{opacity: 0, y:-20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration: 0.5, delay:0.3}}
        className='text-center text-6xl font-Ovo mx-auto border-b-4 border-b-orange-300 dark:text-[#08FDD8] dark:border-b-[#08FDD8]'>
        Work Experience
      </motion.h2>
      {timelineData.map((item, index) => (
        <motion.div key={index} className="flex relative py-10">
          {/* Timeline line */}
          <div className="absolute h-[calc(100%-5rem)] w-0.5 bg-gray-200 left-2.5 top-18" />
          
          {/* Dot */}
          <div className="relative">
            <div className={`w-6 h-6 rounded-full border-4 border-green-500 bg-white z-10`} />
          </div>

          {/* Content Card */}
          <div 
            className="flex-1 pl-6">
            <motion.div  
              initial={{ x:100, opacity: 0 }}
              whileInView={{x:0, opacity:1}}
              transition={{duration: 1.0, delay: 0.5}} 
              className="p-6 rounded-lg shadow-xl border border-gray-100">
              <div className='flex-cols sm:flex items-center justify-between'> 
                <h3 className="flex items-center gap-2 text-xl font-semibold font-Ovo dark:text-white">
                  {item.title}
                </h3>
                {/* Date */}
                <div className="flex items-center w-fit h-auto p-3 text-right bg-green-500 rounded-xl">
                  <p className="text-sm font-Ovo dark:text-white">{item.duration}</p>
                </div>
              </div>
              
              {item.company && (
                <p className="mt-1 text-lg font-Ovo dark:text-white">{item.company}</p>
              )}
              
              {item.location && (
                <p className="mt-2 text-sm italic font-Ovo dark:text-white">{item.location}</p>
              )}
              
              <ul className="mt-4 space-y-2 text-gray-700">
                {item.tasks.map((task, i) => (
                  <li key={i} className="ml-4 list-disc font-Ovo text-lg dark:text-white">{task}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Experience;