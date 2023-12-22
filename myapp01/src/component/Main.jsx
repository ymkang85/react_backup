import React from 'react'

const Main = ({color, txt, name}) => { //props
  return (
    <div 
        id="myreturn" 
        className="title"
        style={{backgroundColor: color, textAlign: "center"}}
        >
        Hello, {txt}!!!
        <br />
        반갑습니다. {name}님!
      </div>
  )
}

export default Main

