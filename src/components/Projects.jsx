import React, { useEffect } from 'react'
import Navbar from './NavBar'
import "../index.css"
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";



const educations =[
  {name:"AltrAI Techngologies Pvt Ltd", date:"July 2024-Present", domain: "Frontend Developer",mode:"Internship",
    project:[
      { id:1,
        site:"https://koiz-2-0.vercel.app/",
        sitename:"Koiz",
        sitenumber:"Project",
         techstack : "React & Tailwind",
        icon : FaArrowUpRightFromSquare },
        ]},       
  
  {name:"Senchola Technology Solutions", date:"January 2024-May 2024", domain: "Frontend Developer",mode:"Internship",
    project:[
    {
      id: 2,
      site:"https://koiz-2-0.vercel.app/",
      sitename:"",
      sitenumber:"",
       techstack : ""}]},
  {name:"Shiash Info Solutions", date:"June 2023-August 2023", domain: "Java & MySQL",mode:"E-Learning",
    project:[
    { id: 3,
      site:"",
      sitename:"",
      sitenumber:"",
       techstack : ""}]},
]

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
   <>

    <main className='py-10 px-5 flex flex-col pb-14  gap-5'>
      {

      educations.map((education,index)=>(
        <main
        key={index}
        className=' shadow-lg rounded-2xl bg-primary  flex flex-col gap-5 px-3 py-5 hover:cursor-text hover:shadow-xl duration-300' data-aos="fade-up">
        <article className='mochi flex flex-col lg:flex-row justify-between gap-3'>
          <h1
          className='text-base text-fourth'
          >{education.name}</h1>
          <p
           className='text-sm  text-fourth'>{education.date}</p>
        </article>
        <aside className='poppins'>
        <p className='text-sm font-bold text-[#84A7BA]' >{education.domain} <span className='text-sm' ><span>&#x2022;</span> {education.mode}</span> </p>
        </aside>  

          
        
        <div className='flex flex-col items-center md:items-start lg:flex-row gap-4'>

          {
            education.project.map(({id,site,sitenumber,sitename,techstack,icon: IconComponent})=>{
            
              if(id==1){
                return(
                  <div
                  key={id}
                  className='bg-[#CCD0D8] w-fit  flex flex-col p-5 gap-5  rounded-2xl  '>
                   <h1
                   className='poppins font-medium text-black text-lg'
                   >{sitenumber}</h1>
                   <div 
                   className='bg-primary p-5   rounded-2xl flex flex-col gap-4'
                  >
                    <h1
                    className='mochi text-base text-fourth'
                    >{sitename}</h1>
                    <div
                    className='flex flex-row  items-center justify-between gap-5 poppins  text-[#84A7BA]'
                    >
                      <p className='text-base' >{techstack} </p>
                      <a 
                      className=' lg:hover:opacity-50 text-sm transition-all duration-100 hover:cursor-pointer'
                      href={site} target="_blank" rel="noopener noreferrer"><IconComponent     /> </a> 
                       </div>
                    
                    
                    </div>
                  </div>
                )        
              }
              else
              return null
            }


            

            
            
            
            
            )
          }
        </div>
        

        
        </main>

      ))


      }
          
    </main>
   </>
  )
}

export default Projects




// <h1 className='text-sm text-white' >{education.sitenumber}<a 
// className="text-sm text-fourth hover:underline animate-pulse"
// href={education.site} target="_blank" rel="noopener noreferrer">{education.sitename}</a></h>



// div className='bg-secondary w-fit  flex flex-col p-5 gap-5  rounded-2xl  '>
// <h1>{education.sitenumber}</h1>
// <a 
// className='bg-fourth p-5 hover:opacity-50  rounded-2xl transition-all duration-300'
// href={education.site} target="_blank" rel="noopener noreferrer">
//   <h1>{education.sitename}</h1>
//   <p>{education.techstack}</p>
// </a>

 
// </div>