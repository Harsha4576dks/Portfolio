import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Education from './components/Education/Education'
import Project from './components/Project/Project'
import Skills from './components/Skills/Skills'
import Footer from './components/Footer/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Home/>
    <Education/>
    <Project/>
    <Skills/>
    <Footer/> 
  </StrictMode>,
)
