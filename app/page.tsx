'use client'

import Image from 'next/image'
import Link from "next/link"
import { useState } from 'react'

import profileImage from './assets/profile_img_1.jpg'

import { educations } from './assets/education_data'
import { experiences } from './assets/experience_data'
import { projects } from './assets/project_data'
import { skills } from './assets/skills_data'

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
        href={`${GitHubLink}`}
        target='_blank'> GitHub </Link>
      <Link className='bg-orange-700 hover:bg-orange-600 transition-all rounded p-2 m-7 text-white' 
        href={`${LinkedInLink}`}
        target='_blank'> LinkedIn </Link>
    </div>
  );
}

function Demographics() {
  return (
    <div className='flex-1 inline-block m-16'>
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
      <ul className={`${scrolling_format}`}> { educationList } </ul>
    </div>
  )
}

function Experience( {scrolling_format, title_format} 
  : {scrolling_format: string, title_format: string}) {
  const experienceList = experiences.map(experience => 
    <li key={experience.id} className='m-4 text-lg text-orange-800'>
      <b className='italic'> { experience.job_title } </b> | { experience.organization_name }<br />
      { experience.location} ({ experience.timing})
      <br />
      <ul className="list-disc pl-4 text-orange-800/60 hover:text-orange-800 transition-all">
        <li>
          { experience.description }
        </li>
      </ul>
    </li>
  )
  return (
    <div className={`m-10`}>
      <h1 className={`${title_format}`}> EXPERIENCE </h1>
      <ul className={`${scrolling_format}`}> { experienceList } </ul>
    </div>
  )
}

function Projects( {scrolling_format, title_format} 
  : {scrolling_format: string, title_format: string}) {
  const projectList = projects.map(project => 
    <li key={project.id} className='m-4 text-lg text-orange-800'>
      <b className='italic'> { project.name } </b> | { project.skills_used }<br />
      <Link className='bg-amber-600 hover:bg-amber-500 transition-all rounded p-0.5 m-1 text-amber-900' 
        href={`${project.code_link}`}
        target='_blank'> View Code </Link>
      ({ project.timing})
      <br />
      <ul className="list-disc pl-4 text-orange-800/60 hover:text-orange-800 transition-all">
        <li>
          { project.description }
        </li>
      </ul>
    </li>
  )
  return (
    <div className={`m-10`}>
      <h1 className={`${title_format}`}> PROJECTS </h1>
      <ul className={`${scrolling_format}`}> { projectList } </ul>
    </div>
  )
}

function Interests_Certifications( {scrolling_format, title_format} 
  : {scrolling_format: string, title_format: string}) {
  const skillsList = skills.map(skill => 
    <button className='bg-amber-600 hover:bg-amber-500 transition-all rounded-full p-5 m-4 text-amber-900 outline outline-double shadow-xl shadow-amber-500'>
      Under development --- to be updated...
    </button>
  )
  return (
    <div className={`m-10`}>
      <h1 className={`${title_format}`}> Interests/Certifications </h1>
      <div className={`${scrolling_format}`}> { skillsList } </div>
    </div>
  )
}


function Skills( {scrolling_format, title_format} 
  : {scrolling_format: string, title_format: string}) {
  const skillsList = skills.map(skill => 
    <button className='bg-amber-600 hover:bg-amber-500 transition-all rounded-full p-5 m-4 text-amber-900 outline outline-double shadow-xl shadow-amber-500'>
      { skill }
    </button>
  )
  return (
    <div className={`m-10`}>
      <h1 className={`${title_format}`}> SKILLS </h1>
      <div className={`${scrolling_format}`}> { skillsList } </div>
    </div>
  )
}

function Portfolio() {
  const [currentDisplay, changeDisplay] = useState('Education')

  function FlipContentButton({name} : {name: string}) {
    return (
      <button
        className= {`
          transition-all rounded px-7 py-5 m-1 text-white shadow-xl shadow-amber-500
          ${currentDisplay == name ? 
              'bg-amber-600 hover:bg-amber-500 border-2 border-rose-800 border-dotted hover:border-solid' : 
              'bg-orange-700 hover:bg-orange-600'}
        `}
        onMouseEnter ={ () => changeDisplay(name) }
      >
        { name }
      </button>
    )
  }

  function ButtonOptions() {
    return (
      <div className='flex-wrap m-10 font-semibold'>
        <FlipContentButton name={'Education'}/>
        <FlipContentButton name={'Experience'}/>
        <FlipContentButton name={'Projects'}/>
        <FlipContentButton name={'Interests/Certifications'}/>
        <FlipContentButton name={'Skills'}/>
      </div>
    )
  }
  
  return (
    <div className='flex-0'>
      <ButtonOptions />

      { currentDisplay === 'Education' && <Education 
        scrolling_format='overflow-y-auto h-[525px] scroll-smooth'
        title_format='text-3xl m-2 font-bold text-orange-800'/> }

      { currentDisplay === 'Experience' && <Experience 
        scrolling_format='overflow-y-auto h-[525px] scroll-smooth'
        title_format='text-3xl m-2 font-bold text-orange-800'/> }

      { currentDisplay == 'Projects' && <Projects 
        scrolling_format='overflow-y-auto h-[525px] scroll-smooth'
        title_format='text-3xl m-2 font-bold text-orange-800'/>}

      { currentDisplay === 'Interests/Certifications' && <Interests_Certifications 
        scrolling_format='overflow-y-auto h-[525px] scroll-smooth'
        title_format='text-3xl m-2 font-bold text-orange-800'/> }

      { currentDisplay == 'Skills' && <Skills 
        scrolling_format='overflow-y-auto h-[525px] scroll-smooth'
        title_format='text-3xl m-2 font-bold text-orange-800'/>}

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