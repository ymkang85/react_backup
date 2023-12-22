import React, { useState, useRef } from 'react'
import Form from './Form';

const App = () => {
  const [mystate, setMystate] = useState(0);
  const myref = useRef(0);
  let myvar = 0;
  //console.log(myref);

  const handleState = ()=>{
    setMystate(mystate+1);
    //console.log("스테이값: "+mystate);
  }

  const handleRef=()=>{
    myref.current = myref.current + 1;
    //console.log("러프값: "+myref.current);
  }
  const handleVar=()=>{
    myvar = myvar + 1;
   // console.log("변수값: "+myvar);
  }

  return (
    <div>
      <p> state 값 : {mystate}</p>
      <p>Ref 값: {myref.current} </p>
      <p>var 값 : { myvar } </p>
      <button onClick={handleState}>state 값 증가</button>
      <button onClick={handleRef}>Ref 값 증가</button>
      <button onClick={handleVar}>Var 값 증가</button>
      <Form />
    </div>
  )
}

export default App