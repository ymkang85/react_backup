import React from 'react'

const Content = ({isLight}) => {
  return (
    <div style={{
        height:"100%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", fontSize:"25px", color:isLight?"green":"pink", backgroundColor:isLight?"#fff":"#000"
    }}>Content</div>
  )
}

export default Content