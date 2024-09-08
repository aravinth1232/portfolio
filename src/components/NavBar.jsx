import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from '../assets/logo.jpg'
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";


const links = [
    {id: 1 , comp:'About' , path:'/' },
    {id: 2 , comp:'Skills', path:'/skills' },
    {id: 3 , comp:'Projects', path:'/projects'},
    {id: 4 , comp:'Contact', path:'/contact'},
    
]




const Navbar = () => {

  
    const [fun,setFun] = useState("flex")
    const [fun2,setFun2] = useState("none")
    
    function open(){
        setFun("none")
        setFun2(" ")
        
    }

    function close(){
        setFun2("none")
        setFun(" ")
    }

  return (
        <>     
            <header className=' bg-secondary flex flex-row justify-between items-center md:justify-around px-5 py-6  ' >
                
               <Link to="/" > <img 
                className='w-12 h-auto'
                src={logo}
                 alt="logo"  /> </Link>
               
               
                <nav className='hidden md:flex text-fifth md:text-lg' >
                    <ul className='flex flex-row gap-10'>
                        {links.map((link) => 
                            <li key={link.id}
                            
                            >
                                <Link 
                               
                                to={link.path}>{link.comp}</Link>
                            </li>)}
                    </ul>
                </nav>


                <div className='md:hidden' >
                <button   
                style={{display:fun }}
                 className=' md:hidden  ' 
                 onClick={open}>           
                <CiMenuFries 
                className=' text-fifth w-10 h-6 font-extrabold '  />
                </button>

                <button  
                style={{display:fun2}}              
                 className='text-fifth md:hidden    ' 
                 onClick={close}
                 >           
                <IoMdClose 
                className=' w-10 h-7'  />
                </button>
                </div>       
            

        </header>   
        
        {/* Sidebar */}

   <div style={{display:fun2}} >   
        <nav 
        className=' md:hidden  bg-tertiary  text-fifth'>
                 <ul className='  flex flex-col gap-5 justify-center items-center  transition-all  text-lg py-5  '>
                        {links.map((link) => 
                            <li key={link.id}>
                                <Link to={link.path}
                                className=""   >{link.comp}</Link>
                            </li>)}
                    </ul>
                </nav>
    </div>
        <Outlet />
     </>

  )
}

export default Navbar
