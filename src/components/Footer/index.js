import React from 'react'
import {FooterContainer,FooterWrap,FooterLinkContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinkTitle,
    FooterLink,
    WebsiteRights
    } from'./FooterElements';
    
    
const Footer =( ) =>{
  return(
    <FooterContainer>
    <FooterWrap>
        <FooterLinkContainer>
            <FooterLinksWrapper>
                <FooterLinksItems>
                    <FooterLinkTitle> About us  </FooterLinkTitle>
                       
                        <FooterLink to="/signin">How it works</FooterLink>
                        <FooterLink to="/signin">Testimanial</FooterLink>
                        <FooterLink to="/signin">Signin</FooterLink>
                        <FooterLink to="/signin">Careers</FooterLink>
                        <FooterLink to="/signin">Investors</FooterLink>
                        <FooterLink to="/signin">Terms of service</FooterLink>
                  
                </FooterLinksItems>
                <FooterLinksItems>
                    <FooterLinkTitle> Videos  </FooterLinkTitle>
                       
                        <FooterLink to="/signin">How it works</FooterLink>
                        <FooterLink to="/signin">Testimanial</FooterLink>
                        <FooterLink to="/signin">Signin</FooterLink>
                        <FooterLink to="/signin">Careers</FooterLink>
                        <FooterLink to="/signin">Investors</FooterLink>
                        <FooterLink to="/signin">Terms of service</FooterLink>
                  
                </FooterLinksItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
                <FooterLinksItems>
                    <FooterLinkTitle> About us  </FooterLinkTitle>
                       
                        <FooterLink to="/signin">How it works</FooterLink>
                        <FooterLink to="/signin">Testimanial</FooterLink>
                        <FooterLink to="/signin">Signin</FooterLink>
                        <FooterLink to="/signin">Careers</FooterLink>
                        <FooterLink to="/signin">Investors</FooterLink>
                        <FooterLink to="/signin">Terms of service</FooterLink>
                  
                </FooterLinksItems>
                <FooterLinksItems>
                    <FooterLinkTitle> About us  </FooterLinkTitle>
                       
                        <FooterLink to="/signin">How it works</FooterLink>
                        <FooterLink to="/signin">Testimanial</FooterLink>
                        <FooterLink to="/signin">Signin</FooterLink>
                        <FooterLink to="/signin">Careers</FooterLink>
                        <FooterLink to="/signin">Investors</FooterLink>
                        <FooterLink to="/signin">Terms of service</FooterLink>
                  
                </FooterLinksItems>
               
            </FooterLinksWrapper>
           
        </FooterLinkContainer>
        <WebsiteRights>
                 Emanuel © {new Date().getFullYear()}
                 All rights reserved.
                </WebsiteRights>
    </FooterWrap>
</FooterContainer>
  )

}

export default Footer