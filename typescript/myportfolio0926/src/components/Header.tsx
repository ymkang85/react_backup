import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ClickAwayListener from 'react-click-away-listener'
import Logo from './incomp/Logo'
import Nav from './nav/Nav'
import NavButton from './nav/NavButton'

interface Props {
   isNavOpen: boolean
}

const Header = () => {
   const [isNavOpen, setIsNavOpen] = useState(false);

   useEffect(() => {
      document.body.style.overflow = isNavOpen ? "hidden" : "unset";
   }, [isNavOpen]);

   const toggleMenu = (): void => {
      setIsNavOpen((prev) => !prev);
   }

   const closeMenu = (): void => {
      setIsNavOpen(false);
   }


   return (
      <ClickAwayListener onClickAway={closeMenu}>
         <StyledHeader isNavOpen={isNavOpen}>
            <Logo variant="dark" />
            <Nav isNavOpen={isNavOpen} closeMenu={closeMenu} />
            <NavButton isNavOpen={isNavOpen} toggleMenu={toggleMenu} />
         </StyledHeader>
      </ClickAwayListener>
   )
}

export default Header

const StyledHeader = styled.header<Props>`
   background-color: ${(props) => props.theme.colors.primary.light};
   display:flex;
   justify-content: space-between;
   align-items: center;
   padding: 2.5rem 1.5rem;
   position: relative;
   z-index:10;
   box-shadow: 10px 30px 30px 100vh
      ${(props) => (props.isNavOpen ?
      "rgba(0,0,0,0.75)" : "rgba(0,0,0,0)")};
   transition: box-shadow 0.35s ease-in-out;                    
  
   @media (min-width: 768px) {
      padding: 4rem 2.5rem;
   }

   @media (min-width: 1024px) {
      padding-inline: 7.5rem;
   }

   @media (min-width: 1440px) {
      padding-inline: 10.3125rem;
   }

   @media (min-width: 1920px) {
      padding-inline: 21rem;
   }
`;