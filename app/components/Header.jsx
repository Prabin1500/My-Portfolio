import Image from 'next/image'
import React from 'react'
import userImage from '../../asstes/userImage.jpg'
import handIcon from '../../asstes/hand-icon.png'

const Header = () => {
  return (
    <div>
        <div>
            <Image src={userImage} alt='MyImage'className='rounded -full w-32'/>
        </div>
        <h3 className='flex items-end gap-2 text-2xl md:text-2xl mb-3 font-Ovo'>
            Hi! I am Prabin 
            <Image src={handIcon} alt='HandIcon' className='w-6' />
        </h3>
        <h1>
            Full Stack Developer
        </h1>
        <p className='max-w-2xl mx-auto font-Ovo'>
            Worked collaboratively with other students in group projects as well as worked on individual coding challanges. Focused on building responsive full-stack web applications.
        </p>
    </div>
  )
}

export default Header
