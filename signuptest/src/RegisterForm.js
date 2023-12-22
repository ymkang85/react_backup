import React, { useState } from 'react'

const RegisterForm = () => {
    const [val, setVal] = useState({
        name: "",
        userid: "",
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        userid: "",
        email: "",
        password: ""
    });

    const validate  = () =>{
        const errors = {
            name: "",
            userid:"",
            password:"",
            email:""
        }
        const valName=/^[가-힣]{2,5}+$/;
        const valUserId = /^[a-zA-Z0-9]{3,8}+$/;

        if(!val.name){ //두자이상
            errors.name = "이름을 입력하세요";            
        }else if(valName.test(val.name)){
            errors.name="이름은 한글 2자에서 5자 사이여야 합니다."
        }
        if(!val.userid){ // 세자이상, 한글, 특수문자 안됨
            errors.userid = "아이디를 입력하세요";            
        }else if(valUserId.test(val.userid)){
            errors.userid="아이디는 영문, 숫자 3자에서 8까지여야 합니다."
        }
        if(!val.password){ // 5자 이상, 10자 이하
            errors.password = "비밀번호를 입력하세요";            
        }
        if(!val.email){ // 이메일 검증
            errors.email = "이메일을 입력하세요";            
        }
        return errors;
    }

    const handleSubmit= (e) =>{
        e.preventDefault();
        // 필드검증
        const errors = validate();
        setErrors(errors);

        if(Object.values(errors).some(v => v)){
            return;
        }

        alert(JSON.stringify(val, null, 4));
        //JSON.stringify(문자열변환값, )
    }
    const handleChange = (e) =>{
        setVal({
            ...val,
            [e.target.name] : e.target.value
        })
    }

    
  return (
    <>
        <form name="form" onSubmit={handleSubmit}>
            <ul>
                <li>
                    <label>이름</label>
                    <input type="text" name="name" value={val.name} onChange={handleChange} />
                    {errors.name && <span>{errors.name}</span>}
                </li>
                <li>
                    <label>아이디</label>
                    <input type="text" name="userid" value={val.userid} onChange={handleChange} />
                    {errors.userid && <span>{errors.userid}</span>}
                </li>
                <li>
                    <label>비밀번호</label>
                    <input type="password" name="password" value={val.password} onChange={handleChange} />
                    {errors.password && <span>{errors.password}</span>}
                </li>
                <li>
                    <label>이메일</label>
                    <input type="email" name="email" value={val.email} onChange={handleChange} />
                    {errors.email && <span>{errors.email}</span>}
                </li>
            </ul>
            <button type="submit">회원가입</button>
        </form>
    </>
  )
}

export default RegisterForm