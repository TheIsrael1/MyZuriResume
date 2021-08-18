import React, {useState} from 'react'
import Sidebar from './components/SideBar';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection'
import ResumeSection from './components/ResumeSection';
import Footer from './components/Footer';
import './App.css';

const App = ()=> {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = ()=>{
    setIsOpen(!isOpen)
  }

  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
    <HeroSection />
    <ResumeSection /> 
    <Footer />
    </>
  );
}

export default App;
