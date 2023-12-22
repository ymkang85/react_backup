import React from 'react'

const Footer = ({isLight, setIsLight}) => {
    const handleLight = ()=>{
        setIsLight(!isLight);
    }
    return (
        <div style={{
            padding: "10px 15px", textAlign: "right", fontSize: "20px", fontWeight: "bold", backgroundColor: isLight? "#ededed" : "#333", color:isLight?"#000":"#fff", borderTop: "1px solid #333",
        }}>
            <button style={{ backgroundColor: "#fff" }}
                onClick={handleLight}
            >밝기모드 변경</button>
        </div>
    )
}

export default Footer