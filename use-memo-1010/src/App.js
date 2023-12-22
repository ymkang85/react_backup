import React, { useState, useEffect, useCallback } from 'react'

const App = () => {
  const [number, setNumber] = useState(0);
  const sumFunction = useCallback(()=>{
    let num = parseInt(number);
    setNumber(num + 555);
    console.log(`더한 값은 : ${number}`);
    return;
  }, [number]);

  // const sumFunction = ()=>{
  //   let num = parseInt(number);
  //   setNumber(num + 555);
  //   console.log(`더한 값은 : ${number}`);
  //   return;
  // }

  useEffect(()=>{
    console.log('sumFuction의 값이 변경되었습니다.');
  }, [sumFunction])

  return (
    <div>
      <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}/>
      <br />
      <button onClick={sumFunction}>555를 더하자.</button>
    </div>
  )
}

export default App