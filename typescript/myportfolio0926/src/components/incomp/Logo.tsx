import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import darkLogo from '../../assets/shard/dark.png'
import lightLogo from '../../assets/shard/light.png'

type LogoProps = {
    variant : "dark" | "light";
};

const StyledLogo = styled(NavLink)`
   @media(min-width: 768px) {
       grid-area: logo;
       justify-self: start;
   }
`;

const Logo = ({ variant }: LogoProps) => {
  return (
    <StyledLogo to="/">
        <img 
           src={ variant === 'dark' ? darkLogo : lightLogo}
           alt="Wein's Portfolio"
           width="200px"
        />   
    </StyledLogo>
  )
}

export default Logo