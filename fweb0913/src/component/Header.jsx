import React from 'react'
import Nav from './Nav'
import { mystyle } from '../style/style'

const Header = () => {
    
    return (
        <div style={mystyle}>
            <div style={{
                fontSize:"30px", 
                fontWeight:700,
                color:"#6f5ad3",
                lineHeight:"80px",
                backgroundColor:"#fff", 
                position:"fixed",
                width:"100%",
                left:0,
                top:0
                }}>Header Logo</div>
            <Nav />
        </div>
    )
}

export default Header