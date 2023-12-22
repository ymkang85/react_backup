import React, { useState } from 'react'
const OnclickEvent = () => {
    const btnClick = (param) => {
        console.log('param : ' + param);
    }
    const [name, setName] = useState();
    const [id, setId] = useState();
    const [email, setEmail] = useState();


    const signUp = () =>{
        console.log()
    }
    return (
        <div>
            <button type="button" onClick={() => btnClick("Button을 클릭함")}>
                클릭하세요.
            </button>
            <div style = {{
                width: "150px",
                padding: "5px 15px",
                border: "1px solid #333"
            }} onClick={()=>btnClick("DIV를 클릭함")}>
                클릭하세요
            </div>
            <a href="http://naver.com"   onClick={()=>btnClick("a를 클릭함")}> 클릭하세요.</a>

            
        </div>
    )
}

export default OnclickEvent