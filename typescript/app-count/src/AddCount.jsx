import React, { useState } from 'react'

const AddCount = () => {
    const [count, setCount] = useState(0);
    const handleCount=()=>{
      setCount(count +1);
    }
  return (
    <div>
        <h2>Count: {count}</h2>
        <button onClick={handleCount}>count 증가</button>
    </div>
  )
}

export default AddCount