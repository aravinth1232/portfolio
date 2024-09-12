import React, { useEffect } from 'react'
import Navbar from './NavBar'
import "../index.css"
import AOS from "aos";
import "aos/dist/aos.css";


const educations =[
  {name:"AltrAI Techngologies Pvt Ltd", date:"July 2024-Present", domain: "Frontend Developer",mode:"Internship", site:"https://koiz-2-0.vercel.app/",sitename:"Koiz-2.0",sitenumber:"My work : "},
  {name:"Senchola Technology Solutions", date:"January 2024-May 2024", domain: "Frontend Developer",mode:"Internship", site:"",sitename:"",sitenumber:""},
  {name:"Shiash Info Solutions", date:"June 2023-August 2023", domain: "Java & MySQL",mode:"E-Learning", site:"",sitename:"",sitenumber:""},
]

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
   <>

    <main className='py-10 px-5 flex flex-col   gap-5'>
      {

      educations.map((education)=>(
        <main className=' shadow-lg rounded-2xl bg-primary  flex flex-col gap-5 px-3 py-5 hover:cursor-pointer hover:shadow-xl duration-300' data-aos="fade-up">
        <article className='mochi flex flex-col lg:flex-row justify-between gap-3'>
          <h1
          className='text-base text-fourth'
          >{education.name}</h1>
          <p
           className='text-sm  text-fourth'>{education.date}</p>
        </article>
        <aside className='poppins'>
        <p className='text-sm font-bold' >{education.domain} <span className='text-sm' ><span>&#x2022;</span> {education.mode}</span> </p>
        </aside>  
    
          <h1 className='text-sm text-white' >{education.sitenumber}<a 
          className="text-sm text-fourth hover:underline animate-pulse"
          href={education.site} target="_blank" rel="noopener noreferrer">{education.sitename}</a></h1>

        
        </main>

      ))


      }
          
    </main>
   </>
  )
}

export default Projects
