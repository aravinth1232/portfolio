// import {BrowserRouter, Route, Routes} from "react-router-dom"




import About from '../src/components/About'
import Skills from '../src/components/Skills'
import Projects from '../src/components/Projects'
import Contact from '../src/components/Contact'
import pic from "../src/assets/logo.jpg"
// import Nopage from '../src/components/Nopage'
// import Home from "../src/components/Home"



// import './App.css'


// function App() {
 
//   return (
//     <>
      
     
//        <BrowserRouter >
        
//           <Routes>
//           <Route path="/" element={<Home /> } /> 
//           {/* <Route path="skills" element={<Skills />} />
//           <Route path="projects" element={ <Projects />  } />
//           <Route path="contact" element= { <Contact /> }   /> */}
//           <Route path='*' element ={ <Nopage /> } />    
          
        
//           </Routes>

//       </BrowserRouter>
//     </>
//   )
// }

// export default App
// App.

import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/NavBar';

const Section = ({ id, children, className }) => (
  <section id={id} className={` bg-primary ${className}`}>
    <h2 className="text-3xl">{children}</h2>
  </section>
);

const App = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
    <div className=''>
     
      <Navbar />
      <main className="pt-24 ">
        <Section id="section1" className="">
            <About />
        </Section>
        <Section id="section2" className="">
          <Skills />
        </Section>
        <Section id="section3" className="">
          <Projects />
        </Section>
      </main>
    </div>
    <Contact />
    </>
  );
};

export default App;
