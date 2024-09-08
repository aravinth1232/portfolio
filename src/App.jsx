import {BrowserRouter, Route, Routes} from "react-router-dom"




import About from '../src/components/About'
import Skills from '../src/components/Skills'
import Projects from '../src/components/Projects'
import Contact from '../src/components/Contact'
import Nopage from '../src/components/Nopage'



import './App.css'

function App() {
 
  return (
    <>
      
     
       <BrowserRouter >
          <Routes>
          <Route path="/" element={<About /> } /> 
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={ <Projects />  } />
          <Route path="contact" element= { <Contact /> }   />
          <Route path='*' element ={ <Nopage /> } />    
          
        
          </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
