import React from 'react'
import Navbar from "./NavBar"
import TextAnimation from "./TextAnimation"
import TextReveal from "./TextReveal"
import pic from "../assets/mypic.jpg"
import pic2 from "../assets/logo.jpg"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { GrDocumentUpload } from "react-icons/gr";

const About = () => {
  return (
    <>

    <main className='flex flex-row pt-20 lg:pt-32 justify-around items-center gap-3 lg:gap-16 px-4'>
      <section className='flex flex-col md:flex-row justify-center items-center  lg:items-center md:px-5 lg:justify-end gap-10 lg:gap-16  w-full '>
      <article className='flex-1 lg:flex-0  flex justify-start md:justify-end '>
        <img src={pic2} alt=""  className=' lg:flex-0 w-3/4 md:w-1/2 lg:w-1/3 '/>
      </article>
      <article className='flex-1 '>
      <TextAnimation />
      <TextReveal /> 

      </article>
      </section>
      <aside className='flex flex-col gap-4 lg:pr-10  '>
      <a href="https://github.com/aravinth1232" target="_blank" rel="noopener noreferrer"
      
      ><FaGithub
      className='hover:transform hover:scale-125 duration-300'
      role='button' /></a>
      <a href="https://github.com/aravinth1232" target="_blank" rel="noopener noreferrer"
      
      ><FaLinkedin
      className='hover:transform hover:scale-125 duration-300'
      role='button' /></a>
      <a href="https://github.com/aravinth1232" target="_blank" rel="noopener noreferrer"
      
      ><GrDocumentUpload
      className='hover:transform hover:scale-125 duration-300'
      role='button' /></a>
      </aside>
      
    </main>
    

  
    

    {/* <Navbar /> */}
 
    {/* <main className="">
      <TextAnimation />
      <TextReveal /> 
    </main> */}
  </>
    
  
  )
}

export default About