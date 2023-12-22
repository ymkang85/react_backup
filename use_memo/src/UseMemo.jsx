import React, {useState, useMemo} from 'react'

const verryHardCal = (num) => {
    console.log('매우 복잡하고 어려운 계산을 한다. !!!');
    for(let i = 0; i < 999; i++) {
        console.log('복잡한 계산중');
    }
    return num + 100000;
}

const verryEasyCal = (num) => {
    console.log('간단하고 쉬운계산중');
    return num + 10000;
}

const UseMemo = () => {
    const [mynum, setMynum] = useState(10);
    const [memNum, setMemNum] = useState(10);
    
    const hardSum = useMemo(() => {
        return verryHardCal(mynum);
    },[mynum]);
    const easySum = verryEasyCal(memNum);

    console.log('렌더링됨');
  return (
    <div>
        <h1>아주 엄청나게 복잡한 계산기</h1>
        <input type="number" name="mynumber" value={mynum} onChange={(e) => parseInt(setMynum(e.target.value))} />
        <span> + 1,00000 = {hardSum} </span>

        <h1>너무나 간단하고 쉬운계산기</h1>
        <input type="number" name="mynumber" value={memNum} onChange={(e) => parseInt(setMemNum(e.target.value))} />
        <span> + 1,00000 = {easySum} </span>
    </div>
    

    
  )
}

export default UseMemo