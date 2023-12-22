import React, {useState} from 'react'
const mystyle = {
    padding:"20px", 
    textAlign:"center", 
    fontSize:"30px",
    borderBottom:"1px solid #333"
};

const Header = ({title, content}) => {
  const [count, setCount ] = useState(1);
  const addCount = () => {
     setCount(count+1);
  }  
  return (
    <div style={mystyle}>
        {title}
        <br />
        {content}
        <br />
        <p> 오늘 {count}번째 클릭하셨습니다. </p>
           <button onClick={addCount}>클릭하기</button>
    </div>
  )
}

export default Header