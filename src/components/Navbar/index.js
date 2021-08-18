import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import { Nav, NavContainer, NavLogo, MobileIcon, NavMenu,  NavLinks, NavItem} from './NavbarElements';
import {animateScroll as scroll} from 'react-scroll';


const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () =>{
        if (window.scrollY >= 80){
            setScrollNav(true)
        }else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)    
    }, [])


    const toggleHome = () =>{
        scroll.scrollToTop();
    }

 return (

  <>
   <Nav scrollNav={scrollNav}>
    <NavContainer>
     <NavLogo onClick={toggleHome}> dero </NavLogo>
     <MobileIcon onClick={toggle}>  
     <FaBars />
     </MobileIcon>
     <NavMenu>
      <NavItem>
       <NavLinks smooth={true} duration={500} spy={true} exact='true' offset={-80} to="resume">My Resume</NavLinks>
      </NavItem>
     </NavMenu>
     </NavContainer>
   </Nav>
  </>
 )
}

export default Navbar;
