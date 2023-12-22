import React from 'react'

const InputUser = ({oncreate, onchange, idx}) => {
  return (
    <div>
        <input type="text" name="username" onChange={(e)=>onchange(idx, e)} />
        <input type="email" name="email" onChange={(e)=>onchange(idx, e)} />
        <button onClick={oncreate}>등록</button>
    </div>
  )
}

export default InputUser