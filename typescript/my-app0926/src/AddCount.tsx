import React, { useState } from 'react'

const AddCount: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const handleCount=()=>{
      setCount(count + 1);
    }
    const handleMinus=()=>{
      setCount(count - 1);
    }
  return (
    <div>
        <h2> Count: {count} </h2>
        <button onClick={handleCount}>count 증가</button>
        <button onClick={handleMinus}>count 감소</button>
    </div>
  )
}

export default AddCount