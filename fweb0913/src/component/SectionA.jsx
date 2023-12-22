import React from 'react'
import { RiFacebookBoxFill, RiInstagramLine, RiKakaoTalkLine } from "react-icons/ri";

const SectionA = () => {
  return (
    <div className='section-a'>
        <h2>WE ARE</h2><br />
        <h1>React React lets you build user interfaces out of individual pieces called components. </h1>
        <div className="icon-box">
            <span><RiFacebookBoxFill /></span>
            <span><RiInstagramLine /></span>
            <span><RiKakaoTalkLine /></span>
        </div>
    </div>
  )
}

export default SectionA