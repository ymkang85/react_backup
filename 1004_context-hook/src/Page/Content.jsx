import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

const Content = () => {
  const {isLight} = useContext(ThemeContext);

  return (
    <div style={{
        height:"100%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", fontSize:isLight?"25px":"40px", color:isLight?"green":"pink", backgroundColor:isLight?"#fff":"#000"
    }}>Content</div>
  )
}

export default Content