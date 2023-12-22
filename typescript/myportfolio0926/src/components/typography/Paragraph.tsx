import React from 'react'
import styled from 'styled-components'
import { ParagraphInterface } from '../../modules/ParagraphInterface'

const Paragraph = ({ children , color="dark"}: ParagraphInterface) => {
  return (
    <StylePragraph color={color}>
       {children}
    </StylePragraph>
  )
}

const StylePragraph = styled.p<ParagraphInterface>`
   color: ${(props) => props.color === "light" 
                      ?props.theme.colors.primary.light
                      :props.theme.colors.primary.dark}; 
   font-size: 0.95rem;
   line-height: 25px;
   font-weight: 400;

   @media (min-width: 768px) {
      font-size:1rem;
   }
`;

export default Paragraph