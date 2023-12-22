import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

type Props = {
    to: string;
    children : string;
    variant: "primary" | "light";
    className?: string;
    button?: "button";
}

const Button = ({ to, children, className, button, variant }: Props) => {
  return (
    <StyledButton 
        className={className}
        to={to}
        variant={variant}
        as={button}>
       {children}
    </StyledButton>     
  )
}

export default Button
const StyledButton = styled(NavLink)<Props>`
   background: ${(props)=> 
      props.variant === "primary"
      ? props.theme.colors.primary.main
      : props.theme.colors.primary.light
   };
   border-radius: 8px;
   color: ${(props)=> 
      props.variant === "primary"
      ? props.theme.colors.primary.light
      : props.theme.colors.primary.dark
   }
   font-size: 0.95rem;
   font-weight:500;
   letter-spacing: 1px;
   line-height:21px;
   padding: 1rem 1.5rem;
   text-align:center;
   text-transform: uppercase;
   transition: all 0.25s ease-in-out;

   @media (min-width: 1440px) {
      &:hover {
        background: ${(props) => props.theme.colors.secondary.main};
        color:${(props) => props.theme.colors.secondary.light};
      }
   }
`;