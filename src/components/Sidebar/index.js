import React from 'react';
import { SidebarContainer,
    Icon,
    CloseIcon
    ,SidebarWrapper
    ,SidebarMenu,
    SidebarLink ,
    SidebarBtnWrap,
    SidebarRoute
} from './SidebarElements';

const Sidebar = ({toggle,isOpen})=>{
   return(
       <SidebarContainer isOpen={isOpen} onClick={toggle}>
         <Icon onClick={toggle}>
             <CloseIcon/>
         </Icon>
         <SidebarWrapper>
             <SidebarMenu>
                 <SidebarLink  onClick={toggle}  to="about">About</SidebarLink>
                 <SidebarLink to="discover" onClick={toggle}>
                   Discover
                 </SidebarLink>
                 <SidebarLink to="services" onClick={toggle}>
                    Service
                 </SidebarLink>
                
                 <SidebarLink to="signup" onClick={toggle}>
                     Sign Up
                 </SidebarLink>
                 <SidebarLink to="contact" onClick={toggle}>
                     Contact
                 </SidebarLink>
                 </SidebarMenu>
             <SidebarBtnWrap>
                 <SidebarRoute to ='signin'>Sign In</SidebarRoute>
             </SidebarBtnWrap>
             
         </SidebarWrapper>
       </SidebarContainer>
   )

}

export default Sidebar;