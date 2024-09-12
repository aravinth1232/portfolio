import React,{useEffect} from 'react'
import Navbar from "./NavBar"
import TextAnimation from "./TextAnimation"
import TextReveal from "./TextReveal"
import pic from "../assets/mypic.jpg"
import pic2 from "../assets/logo.jpg"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { GrDocumentUpload } from "react-icons/gr";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>

    <main className='flex flex-row pt-20 lg:pt-32 justify-around items-center gap-3 lg:gap-16 px-4 '           >
      <section className='flex flex-col md:flex-row justify-center items-center  lg:items-center md:px-5 lg:justify-end gap-10 lg:gap-16  w-full ' data-aos="fade-right"> 
      <article className='flex-1 lg:flex-0  flex justify-start md:justify-end '>
        <img src={pic2} alt=""  className=' lg:flex-0 w-3/4 md:w-1/2 lg:w-1/3 '/>
      </article>
      <article className='flex-1  '>
      <TextAnimation />
      <TextReveal /> 

      </article>
      </section>
      <aside className='flex flex-col gap-4 lg:gap-5 lg:pr-10  ' data-aos="fade-left">
      <a href="https://github.com/aravinth1232" target="_blank" rel="noopener noreferrer"
      
      ><FaGithub color='#F0F8FF'
      className='hover:transform hover:scale-125 duration-300'
      role='button' /></a>
      <a href="https://linkedin.com/in/aravinth-am" target="_blank" rel="noopener noreferrer"
      
      ><FaLinkedin color='#F0F8FF'
      className='hover:transform hover:scale-125 duration-300'
      role='button' /></a>
      <a href="https://drive.google.com/file/d/10hnmo5p5a1KMU2kVkvZ4j99RsFJrQc8x/view" target="_blank" rel="noopener noreferrer"
      
      ><GrDocumentUpload color='#F0F8FF'
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