import React, { useEffect, useState } from 'react'
import { Sectionids } from './Sectionids'
import {Link} from "react-router-dom"
import "../App.css"
import "../index.css"

const Navbar2 = () => {

        const [active,setactive] =useState("about")
        const [isScrolled,SetIsScrolled] = useState(false)

        const ScrollToSection = (sectionId) =>{
            const element = document.getElementById(sectionId);
            // console.log(element)
            if(element){
                const marginTop = 0 
                const ScrollToY = element.getBoundingClientRect().top + window.scrollY - marginTop;
                window.scrollTo({
                    top: ScrollToY,
                    behavior:"smooth"
                })
            }
        }

        const determineActiveSection = () =>{
            for(let i=Sectionids.length-1; i>=0 ; i++){
                const section = document.getElementById(Sectionids[i]);
                if(section){
                    const rect = section.getBoundingClientRect();
                    if(rect.top <=120 && rect.bottom >=120){
                        setactive(Sectionids[i])
                        break;
                    }
                }
            }
        }

        // useEffect(()=>{
        //     const handledScroll = () =>{
        //         if(window.scrollY > 300){
        //             SetIsScrolled(true);}
        //         else{
        //             SetIsScrolled(false)
        //         }
        //         determineActiveSection()
        //     };

        //     window.addEventListener("scroll",handledScroll);

        //     return ()=>{
        //         window.removeEventListener("scroll",handledScroll);

        //     }
        // },[])


  return (
    <nav className=' w-[99vw] mx-auto fixed top-0 bg-green-800 py-4'>
        <div className="container w-[100%] mx-auto ">
            <div className="row flex justify-around items-center  ">
                <div className="logo">lolo</div>
                <ul className='menu-bar flex gap-6 text-xl'>

                    {
                        Sectionids.map((sectionId,i) =>(
                            <li key={i}
                            className='hike  '
                            onClick={()=>ScrollToSection(sectionId)}>
                                <Link to="/" 
                                className={active === sectionId ? "active" : "" } >{sectionId}</Link>
                            </li>

                        ))
                    }
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar2
