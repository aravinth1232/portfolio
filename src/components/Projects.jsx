import React from 'react'
import Navbar from './NavBar'
import "../index.css"

const educations =[
  {name:"AltrAI Techngologies Pvt Ltd", date:"July 2024-Present", domain: "Frontend Developer",mode:"Internship"},
  {name:"Senchola Technology Solutions", date:"January 2024-May 2024", domain: "Frontend Developer",mode:"Internship"},
  {name:"Shiash Info Solutions", date:"June 2023-August 2023", domain: "Java & MySQL",mode:"E-Learning"},
]

const Projects = () => {
  return (
   <>

    <main className='py-10 px-5 flex flex-col   gap-5'>
      {

      educations.map((education)=>(
        <main className=' shadow-lg rounded-2xl bg-secondary  flex flex-col gap-5 px-3 py-5 hover:cursor-pointer hover:shadow-xl duration-300'>
        <article className='mochi flex flex-col lg:flex-row justify-between gap-3'>
          <h1
          className='text-base text-primary'
          >{education.name}</h1>
          <p
           className='text-sm text-primary'>{education.date}</p>
        </article>
        <aside className='poppins'>
        <p className='text-base' >{education.domain} <span className='text-sm' ><span>&#x2022;</span> {education.mode}</span> </p>
        </aside>  
        </main>

      ))


      }
          
    </main>
   </>
  )
}

export default Projects
