import React, { useEffect, useRef } from 'react'

const Form = () => {
  const inputRef = useRef();

  useEffect(() => {
    //console.log('랜더링됨');
    //console.dir(inputRef);
    inputRef.current.focus();
  }, []);

  const handleLogin = () => {
    if (inputRef.current.value) {
      alert(`환영합니다. ${inputRef.current.value}님 !!`);
      inputRef.current.focus();
    } else {
      alert("이름을 입력하세요.");
      inputRef.current.focus();
    }
  }
  return (
    <div>
      <label style={{ display: "block", marginTop: "40px" }}>회원이름</label>
      <input ref={inputRef} type="text" placeholder='username' />
      <button onClick={handleLogin}>로그인</button>
    </div>
  )
}

export default Form