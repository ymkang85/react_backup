import React from 'react'
import styled from 'styled-components'
const H3 = styled.h3`
  color: #000;
`;
const Div0 = styled.div`
  display:flex;
  float:left;
  margin-left:auto;
  margin-right:auto;
  padding:20px;
`;
const Div1 = styled.div`
  backgroundColor:#fff
  margin:0;
  padding:0;
`;
const Div2 = styled.div`
  padding:0;
  width:500px;
  height:5px;
  background-color:#935d8c;
`;
const P1 = styled.p`
  display:flex;
  color:#999;
  font-size:25px;
  line-height:40px;
  width:800px;
`;
const Div3 = styled.div`
  margin-top:25px;
  padding:0;
`;
const Button1 = styled.button`
  color:#999;
  background-color:#fff;
  border:2px solid #999;
  border-radius:10px;
  width:150px;
  height:45px;
  font-size:15px;
`;
const Img = styled.img`
  width:300px;
  height:300px;
  margin-left:auto;
  margin-right:auto;
`;
const SectionA = () => {

  return (
    <Div0>
      <Div1>
        <H3>Ipsum sed adipiscing</H3>
        <Div2></Div2>   
        <Div3>
          <P1>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</P1>
          <Button1>Learn More</Button1>
        </Div3>          
      </Div1>
      <Img src="./images/round.png" alt="round" />
    </Div0>
  )
}

export default SectionA