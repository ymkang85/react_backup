import React from 'react'
import styled from 'styled-components'
import HeadingInterface from '../../modules/HeadingInterface';
export type NewHeadingInterface = {
    children: string;
} & HeadingInterface;

const Heading: React.FC<NewHeadingInterface> = ({
    children,
    variant,
    color
}) => {
      if(variant === 'h1'){
        return (
           <StyledH1 variant={variant} color={color}>
             {children}
           </StyledH1> 
        );
      } else if (variant === 'h2') {
        return(
          <StyledH2 variant={variant} color={color}>
            {children}
          </StyledH2> 
        );
      } else {  
        return(
          <StyledH3 variant={variant} color="dark">
            {children}
          </StyledH3>
        );
      }   
};

const StyledH1 = styled.h1<HeadingInterface>`
   color: ${(props) => props.theme.colors.primary.light};
   font-size:2rem;
   font-weight: 400;
   line-height: 36px;

   @media(min-width: 768px) {
      font-size: 3rem;
      line-height: 3rem;
   }
`;
const StyledH2 = styled.h2<HeadingInterface>`
color: ${(props) => props.color==="dark"
          ? props.theme.colors.primary.dark
          : props.theme.colors.primary.light
        };
font-size:1.25rem;
font-weight: 500;
letter-spacing:5px;
line-height: 26px;
text-transform: uppercase;
`;

const StyledH3 = styled.h3<HeadingInterface>`
color: ${(props) => props.theme.colors.primary.dark};
font-size:1.25rem;
line-height: 1.6rem;
letter-spacing: 5px;
text-transform: uppercase;
`;

export default Heading