import React, { useState, useEffect, useMemo } from 'react'

const calculatorFib = (n) => {
    if (n < 2) {
        return n;
    }
    return calculatorFib(n - 1) + calculatorFib(n - 2);
}

const Calculater = ({ title }) => {

    const [number, setNumber] = useState(0);
    const [name, setName] = useState('');
    const [darkTheme, setDarkTheme] = useState(true);

    const themeStyle = useMemo(() => {
        return {
            backgroundColor: darkTheme ? "#312346" : "#fff",
            color: darkTheme ? "#fff" : "#312346"
        };
    }, [darkTheme])

    const fiResult = useMemo(() => {
        return calculatorFib(number);
    }, [number]);

    useEffect(() => {
        console.log('테마가 변경됨');
    }, [themeStyle, fiResult]);

    return (
        <div className='container' style={themeStyle}>
            <h1>{title}</h1>
            <input type="number" onChange={(e) => setNumber(parseInt(e.target.value))} />
            <p className="bold">
                계산기 결과 값은 <span>{number} ==&gt; {fiResult}</span>
            </p>
            <div className="container2">
                <label>이름을 입력하세요.</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <p className="bold">
                    {name || '이름이 입력될 예정입니다.'}
                </p>
            </div>
            <div className="toggle">
                <button onClick={() => setDarkTheme((prevDark) => !prevDark)}>
                    테마변경
                </button>
            </div>
        </div>
    )
}

export default Calculater