import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

type Props = {
    children : React.ReactNode;
    className?: string;
}

const pageMotion ={
    initial : { opacity: 0, scale: 0 },
    animate : { opacity: 1, scale: 1, y:0, transition: {duration: 0.5}},
    exit : { opacity: 0, scale: 0, transition: {duration: 0.5}}
}

const Container = ({children, className} : Props) => {
  return (
    <StyledContainer className={className} initial='initial' animate='animate' exit='exit' variants={pageMotion}>
        { children }
    </StyledContainer>
  )
}

export default Container

const StyledContainer = styled(motion.div)`
    width: 87%;
    margin: 0 auto;
    &.full {
        @media (max-width: 767px) {
            width: 100%;
            & > div {
                border-radius: 0;
            }
        }
    }

    @media (min-width: 768px) {
        width: 88%;
    }
    @media (min-width: 1024px) {
        width: 80%;
    }
    @media (min-width: 1440px) {
        width: 77%;
    }
    @media (min-width: 1920px) {
        width: 65%;
    }
`;