import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink} from './SideBarElements';
const Sidebar
 = ({isOpen,toggle}) => {
 return (
  <SidebarContainer isOpen={isOpen} onClick={toggle}>
   <Icon onClick={toggle}>
    <CloseIcon> </CloseIcon>
   </Icon>
   <SidebarWrapper>
    <SidebarMenu>
     <SidebarLink onClick={toggle} to="home">
      Back to Top
     </SidebarLink>
     <SidebarLink onClick={toggle} to="resume">
      Resume
     </SidebarLink>
     <SidebarLink onClick={toggle} to="contact">
      Get in Touch
     </SidebarLink>
    </SidebarMenu>
   </SidebarWrapper>
  </SidebarContainer> 
 )
}

export default Sidebar

