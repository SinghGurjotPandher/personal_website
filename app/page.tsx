import Image from "next/image"

import profileImage from './assets/profile_img_1.jpg'
import { educations } from './assets/education_data'

function ProfileImage() {
  return (
    <Image
      className='m-6 rounded-tl-full rounded-b-full'
      src={profileImage}
      alt='Gurjot Singh Pandher'
      width={400}
    />
  )
}

function Demographics() {
  return (
    <div className='inline-block m-16 flex-2'>
      <h1 className='text-5xl text-center font-bold m-5 text-white'> Gurjot Singh Pandher </h1>
      <ProfileImage />
    </div>
  )
}

function Education() {
  const educationList = educations.map(education => 
    <li key={education.id} className='m-4 text-lg text-orange-800'>
      <b className='italic'> { education.school } </b> | { education.education_level } | GPA: { education.GPA }<br />
      { education.location} ({ education.graduation_date})
      <br />
      <ul className="list-disc pl-4 text-orange-800/60 hover:text-orange-800">
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
    <div className='m-10'>
      <h1 className='text-3xl m-2 font-bold text-orange-800'> EDUCATION </h1>
      <ul> {educationList} </ul>
    </div>
  )
}


function Portfolio() {
  return (
    <div className='flex-1'>
      <Education />

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
