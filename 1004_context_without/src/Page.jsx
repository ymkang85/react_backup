import React from 'react'
import Header from './Page/Header'
import Content from './Page/Content'
import Footer from './Page/Footer'

const Page = ({isLight, setIsLight}) => {
  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between", height:"100%"}}>
        <Header isLight={isLight} setIsLight= {setIsLight} />        
        <Content isLight={isLight} setIsLight= {setIsLight} />
        <Footer isLight={isLight} setIsLight= {setIsLight} />
    </div>
  )
}

export default Page