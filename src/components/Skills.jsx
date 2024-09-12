import React, { useEffect } from 'react'
import Navbar from './NavBar'
import { FaHtml5 } from "react-icons/fa6";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import AOS from "aos";
import "aos/dist/aos.css";



const items =[
  {id: 1, name:"Html",icon: FaHtml5  },
  {id: 2, name:"CSS",icon: DiCss3  },
  {id: 3, name:"Javasript",icon: IoLogoJavascript },
  {id: 4, name:"React",icon: FaReact  },
  {id: 5, name:"Tailwind",icon: RiTailwindCssFill },
  {id: 6, name:"BootStrap",icon: FaBootstrap},
  {id: 7, name:"Java",icon: FaJava},
  {id: 8, name:"MySQL",icon: GrMysql},
    ]
    
 


const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
       
        
        <main className='px-5 py-20 grid grid-cols-2 md:grid-cols-3 justify-items-stretch gap-10 lg:gap-16 xl:gap-20'>{
          items.map(({id,name,icon:IconComponent})=>
          (
            <div key={id}
            className='flex bg-primary  flex-1 flex-col justify-center items-center px-4 gap-2 cursor-pointer  rounded-2xl py-2 hover:transform shadow-xl hover:scale-110  duration-300' data-aos="fade-up">
              
                <IconComponent color='#ADBBDA' size={50}  className='  '/>
                              
              <h1 className='mochi text-base lg:text-2xl text-fourth '>{name}</h1>

            </div>)

          


          )}
        
        </main>

   
    </>
  )
}


// <main className='px-5 py-20 flex flex-row justify-evenly items-center gap-10 lg:gap-14 xl:justify-between xl:gap-20 flex-1 flex-wrap'>{
//   items.map(({id,name,icon:IconComponent})=>
//   (
//     <div key={id}
//     className='flex  flex-1 flex-col justify-center items-center px-4 gap-2 cursor-pointer'>
      
//         <IconComponent size={50}  className=' hover:transform hover:scale-125 duration-300 '/>
                      
//       <h1 className='mochi text-base lg:text-2xl'>{name}</h1>

//     </div>)

  


//   )}

// </main>







export default Skills
