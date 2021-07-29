import React,{useState,useEffect} from   "react";
import {FaBars} from "react-icons/fa";
import { Nav,
    NavBarContainer,
   
    NavLogo,
    NavMenu,
    MobileIcon,
    NavItem,
    NavLinks,
    NavBtnLink,      
    NavBtn} from "./NavBarElements";
const Navbar =({toggle}) =>{
    const [scrollNav,setScrollNav]= useState(false);
    const changeNav =()=>{
        if(window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }
 useEffect(() => {
    window.addEventListener('scroll', changeNav);
    
 }, [])

    return (
        <>
       <Nav  scrollNav ={scrollNav}>
           <NavBarContainer >
                   <NavLogo to='/'>
                    Like 
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                    <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover"
                             smooth={true}
                             duration={500}
                             spy={true}
                             exact='true'
                             offset={-80}
                             >Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services"
                             smooth={true}
                             duration={500}
                             spy={true}
                             exact='true'
                             offset={-80}
                             >Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact"
                             smooth={true}
                             duration={500}
                             spy={true}
                             exact='true'
                             offset={-80}
                             >Contact</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup"
                             smooth={true}
                             duration={500}
                             spy={true}
                             exact='true'
                             offset={-80}
                             >Sign up</NavLinks>
                        </NavItem>
                        </NavMenu>
                        <NavBtn>
                        <NavBtnLink to='/signin'> logIn
                        </NavBtnLink>      
                        </NavBtn>
            </NavBarContainer>
       </Nav>
       </>
    )
}

export default Navbar;