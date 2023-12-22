import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { UserContext } from '../context/UserContext'

const Header = () => {
  const { isLight } = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    <div style = {{
        padding: "10px", textAlign:"center", fontSize:"20px", fontWeight:"bold",color:isLight?"#000":"#fff", backgroundColor:isLight?"#ededed":"#333", borderBottom:"1px solid #333"
    }}>반갑습니다, {user}님</div>
  )
}

export default Header