import React from 'react'

const Header = () => {
    const styles = {
        padding:"15px",
        textAlign:"center",
        borderBottom:"1px solid black", 
        fontSize:"30px", 
        color:"blue",
        marginBottom:"15px"
    }
  return (
    <div className="header" style={styles}>
        <img src="images/logo.png" alt="logo" />
        Header
    </div>
  )
}

export default Header