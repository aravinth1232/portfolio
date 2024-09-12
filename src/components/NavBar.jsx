// import React, { useState } from 'react'
// import { Link, Outlet } from 'react-router-dom'
// import logo from '../assets/logo.jpg'
// import { CiMenuFries } from "react-icons/ci";
// import { IoMdClose } from "react-icons/io";
// import '/src/index.css'


// const links = [
//     {id: 1 , comp:'About' , path:'/' },
//     {id: 2 , comp:'Skills', path:'/skills' },
//     {id: 3 , comp:'Projects', path:'/projects'},
//     // {id: 4 , comp:'Contact', path:'/contact'},
    
// ]




// const Navbar = () => {

  
//     const [fun,setFun] = useState("flex")
//     const [fun2,setFun2] = useState("none")
    
//     function open(){
//         setFun("none")
//         setFun2(" ")
        
//     }

//     function close(){
//         setFun2("none")
//         setFun(" ")
//     }

//   return (
//         <>     
//             <header className=' bg-secondary flex flex-row justify-between items-center md:justify-around px-5 py-6  ' >
                
//                <Link to="/" > <img 
//                 className='w-12 h-auto'
//                 src={logo}
//                  alt="logo"  /> </Link>
               
               
//                 <nav className='hidden md:flex text-fifth md:text-lg ' >
//                     <ul className='flex flex-row gap-10 '>
//                         {links.map((link) => 
//                             <li key={link.id}
//                                 className='hike'
//                             >
//                                 <Link 
                               
//                                 to={link.path}>{link.comp}</Link>
//                             </li>)}
//                     </ul>
//                 </nav>


//                 <div className='md:hidden' >
//                 <button   
//                 style={{display:fun }}
//                  className=' md:hidden  ' 
//                  onClick={open}>           
//                 <CiMenuFries 
//                 className=' text-fifth w-10 h-6 font-extrabold '  />
//                 </button>

//                 <button  
//                 style={{display:fun2}}              
//                  className='text-fifth md:hidden    ' 
//                  onClick={close}
//                  >           
//                 <IoMdClose 
//                 className=' w-10 h-7'  />
//                 </button>
//                 </div>       
            

//         </header>   
        
//         {/* Sidebar */}

//    <div style={{display:fun2}} >   
//         <nav 
//         className='md:hidden  bg-tertiary  text-fifth'>
//                  <ul className=' w-1/2 h-[50%] flex flex-col gap-5 justify-start bg-primary items-start  transition-all  text-lg py-5 px-6 rounded-r-2xl  absolute  rounded- '>
//                         {links.map((link) => 
//                             <li key={link.id}>
//                                 <Link to={link.path}
//                                 className=""   >{link.comp}</Link>
//                             </li>)}
//                     </ul>
//                 </nav>
//     </div>
//         <Outlet />
//      </>

//   )
// }

// export default Navbar




import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import pic from "/src/assets/logo.jpg"


const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        // Detecting which section is in view
        if (window.scrollY >= sectionTop - sectionHeight / 2) {
          currentSection = section.getAttribute('id');
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className=" fixed top-0 w-full mx-auto px-10 rounded-xl bg-primary text-secondary shadow-md z-10">
       {/* <header className='flex justify-between sm:justify-around items-center  py-4'>
            <article>
              <img src={pic} alt="" 
              className=' w-10 h-10 lg:w-16 lg:h-16 '/>
            </article>
            <button
            className='bg-green-700 px-5 py-1 rounded-2xl'
            ><a href="tel:+917708241659">Contact</a></button>
      </header> */}
      <ul className="flex justify-center space-x-6 md:space-x-10 py-6">
        <li>
          <NavLink
            to="#section1"
            className={`text-base md:text-xl ${
              activeSection === 'section1' ? 'text-white font-bold ' : ''
            } hover:text-tertiary`}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="#section2"
            className={`text-base md:text-xl ${
              activeSection === 'section2' ? 'text-white font-bold ' : ''
            } hover:text-tertiary`}
          >
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink
            to="#section3"
            className={`text-base md:text-xl ${
              activeSection === 'section3' ? 'text-white font-bold ' : ''
            } hover:text-tertiary`}
          >
           Experience
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
