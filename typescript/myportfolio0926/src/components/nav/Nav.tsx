import React from 'react'
import styled from 'styled-components'
import Navlinks from './Navlinks';

interface NavProps {
   isNavOpen : boolean;
   closeMenu: () => void;
}

const Nav = ({ isNavOpen, closeMenu }:NavProps) => {
  return (
    <StyledNav isNavOpen={isNavOpen} closeMenu={closeMenu}>
       <Navlinks closeMenu = {closeMenu} />
    </StyledNav>
  )
}

export default Nav

const StyledNav = styled.nav<NavProps>`
   background: ${(props) => props.theme.colors.primary.dark};
   left: 0;
   position:absolute;
   right:0;
   top:0;
   transform: translateY(${(props)=>(props.isNavOpen ? "108px" : "-400px")});
   transition: transform 0.35s ease-in-out;

   @media (min-width: 768px) {
      position:unset;
      transform: unset;
      background: unset;
   }
`;