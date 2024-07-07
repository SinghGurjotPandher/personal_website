'use client'
import Image from 'next/image'
import Link from "next/link";

import profileImage from './assets/profile_img_1.jpg'
import { educations } from './assets/education_data'

function ProfileImage() {
  return (
    <div className='flex justify-center mt-10'>
      <Image
        className=' rounded-tl-full rounded-b-full'
        src={profileImage}
        alt='Gurjot Singh Pandher'
        width={300}
      />
    </div>
  )
}

function SocialMediaButtons({GitHubLink, LinkedInLink} 
  :{GitHubLink: string, LinkedInLink: string}) {
  return (
    <div className='flex justify-center text-2xl m-10'>
      <Link className='bg-orange-700 hover:bg-orange-600 transition-all rounded p-2 m-7 text-white' 
        href={`${GitHubLink}`}> GitHub </Link>
      <Link className='bg-orange-700 hover:bg-orange-600 transition-all rounded p-2 m-7 text-white' 
        href={`${LinkedInLink}`}> LinkedIn </Link>
    </div>
  );
}

function Demographics() {
  return (
    <div className='inline-block m-16 flex-2'>
      <h1 className='text-5xl text-center font-bold m-5 text-white'> Gurjot Singh Pandher </h1>
      <ProfileImage />
      <SocialMediaButtons 
        GitHubLink='https://github.com/SinghGurjotPandher'
        LinkedInLink='https://www.linkedin.com/in/gurjot-singh-pandher-28243526a/'/>
    </div>
  )
}

function Education( {scrolling_format, title_format} 
  : {scrolling_format: string, title_format: string}) {
  const educationList = educations.map(education => 
    <li key={education.id} className='m-4 text-lg text-orange-800'>
      <b className='italic'> { education.school } </b> | { education.education_level } | GPA: { education.GPA }<br />
      { education.location} ({ education.graduation_date})
      <br />
      <ul className="list-disc pl-4 text-orange-800/60 hover:text-orange-800 transition-all">
        <li>
          { education.awards }
        </li>
        <li>
          { education.relevant_coursework }
        </li>
      </ul>
    </li>
  )
  return (
    <div className={`m-10`}>
      <h1 className={`${title_format}`}> EDUCATION </h1>
      <ul className={`${scrolling_format}`}> {educationList } </ul>
    </div>
  )
}

function ButtonOptions() {

  function clicked() {
    alert(`clicked`)
  }
  
  return (
    <div className='flex m-5 p-5 font-semibold'>
      <button 
        className='bg-amber-700 hover:bg-amber-600 transition-all rounded px-7 py-5 m-1 text-white'
        onClick={clicked}
      >
        Education
      </button>
      <button className='bg-amber-700 hover:bg-amber-600 transition-all rounded px-7 py-5 m-1 text-white'>
        Experience
      </button>
      <button className='bg-amber-700 hover:bg-amber-600 transition-all rounded px-7 py-5 m-1 text-white'>
        Projects
      </button>
      <button className='bg-amber-700 hover:bg-amber-600 transition-all rounded px-7 py-5 m-1 text-white'>
        Interests/Certifications
      </button>
      <button className='bg-amber-700 hover:bg-amber-600 transition-all rounded px-7 py-5 m-1 text-white'>
        Skills
      </button>
    </div>
  )
}

function Portfolio() {
  return (
    <div className='flex-1'>
      <ButtonOptions />
      <Education 
        scrolling_format='overflow-y-auto h-[520px] scroll-smooth'
        title_format='text-3xl m-2 font-bold text-orange-800'/>

      
      
    </div>
  )
}

export default function Home() {
  return (
    <section className='md:flex h-screen w-screen bg-gradient-to-l from-amber-300 to-orange-400'>
      <Demographics />
      <Portfolio />
    </section>
  );
}