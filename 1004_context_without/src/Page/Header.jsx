import React from 'react'

const Header = ({isLight}) => {
  return (
    <div style = {{
        padding: "10px", textAlign:"center", fontSize:"20px", fontWeight:"bold", color:isLight?"#000":"#fff", backgroundColor:isLight?"#fff":"#000", borderBottom:isLight?"1px solid #000":"1px solid #fff"
    }}>Header</div>
  )
}

export default Header