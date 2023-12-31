import React, { useRef, useCallback, useState } from 'react'
import Card from './compoent/Card';

const initialUserData = {
    fullName : "",
    email: "",
    password:"",
    passwordConfirm:""
};

const StateForm = () => {
    console.log("StateForm.");
    const [userData, setUserData] = useState(initialUserData);
    const inputUpdateHandler = useCallback(
        (type)=>(event) => {
            setUserData({...userData, [type]:event.target.value});
            },
            [userData]
    );

    const formHandler = useCallback(
        () => (event) => {
            event.preventDefault();
            console.log(userData);
        }, [userData]
    );

  return (
    <div className='flex h-screen bg-gray-500 w-screen items-center justify-center'>
        <Card>
        <h1 className='text-3xl'> SignUp </h1>
        <form className='mt-4' onSubmit={formHandler()}>
            <div className="flex flex-col mb-4">
                <label className='text-gray-700 text-sm font-bold mb-2'htmlFor='full_name'>이름</label>
                <input type="text"placeholder='이름' className='shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='full-name' value={userData.fullName} onChange={inputUpdateHandler("fullName")}  />
            </div>
            <div className="flex flex-col mb-4">
                <label className='text-gray-700 text-sm font-bold mb-2'htmlFor='email'>이메일</label>
                <input type="email" placeholder='이메일' className='shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='email' value={userData.email} onChange={inputUpdateHandler("email")} />
            </div>
            <div className="flex flex-col mb-4">
                <label className='text-gray-700 text-sm font-bold mb-2'htmlFor='pass'>비밀번호</label>
                <input type="password" placeholder='비밀번호' className='shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='pass' value={userData.password} onChange={inputUpdateHandler("password")} />
            </div>
            <div className="flex flex-col mb-4">
                <label className='text-gray-700 text-sm font-bold mb-2'htmlFor='pass_ck'>비밀번호 확인</label>
                <input type="password" placeholder='비밀번호 확인' className='shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: shadow-outline' id='pass_ck' value={userData.passwordConfirm} onChange={inputUpdateHandler("passwordConfirm")}/>            
                </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded focus:outline-none focus:shadow-outline"> 전  송 </button>
        </form>
        </Card>
    </div>
  )
}

export default StateForm