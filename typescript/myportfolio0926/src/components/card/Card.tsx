import React from 'react'
import styled from 'styled-components'

type Props = {
    children : React.ReactNode;
    className?: string;
}

const Card = ({ children, className} : Props) => {
  return (
    <StyledCard className= {className}>
        {children}
    </StyledCard>
  )
}

const StyledCard = styled.div<Props>`
    border-radius: 10px;
    overflow: hidden;
    display: grid;
    place-items: center;
`;

export default Card