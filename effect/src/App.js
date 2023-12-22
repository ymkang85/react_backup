import React, { useState, useEffect } from 'react'
import Counter from './Counter';

const App = () => {
  const [playCounter, setPlayCounter] = useState(false);
  return (
    <>
      { playCounter && <Counter /> }
      <button onClick={()=>setPlayCounter(!playCounter)}>카운터 보기/끄기</button>
    </>
  )
}

export default App