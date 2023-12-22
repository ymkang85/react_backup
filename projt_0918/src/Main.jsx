import React from 'react';
import styled from 'styled-components';
import Card from './Card'
import str1 from './data/str1'

const Container = styled.div`
    width:1200px;
    margin: 20px auto;
    display:flex;
`;
const Aside = styled.div`
    width:30%;
    border-right:1px dashed #999;
    padding:50px 30px;
    font-size:30px;
    font-weight:bold;
    background:#ededed;
`;
const Contents = styled.div`
    width:70%;
    padding:20px;
    font-size:20px;
`;

const Main = () => {
  return (
    <Container>
        <Aside>ASIDE</Aside>
        <Contents>
           {
              str1.map((txt, index)=>(
                  <Card key={index} str={txt.text} maxLength={txt.maxLength} index={index} />
              ))
           }

        
        </Contents>
    </Container>
  )
}

export default Main