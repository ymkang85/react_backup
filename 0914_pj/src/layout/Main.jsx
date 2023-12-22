import React from 'react'
import styled from 'styled-components'
import SectionA from '../components/SectionA'
import SectionB from '../components/SectionB'
import SectionC from '../components/SectionC'
import SectionD from '../components/SectionD'
const Div0 = styled.div`
  background:#fff;
  margin:0;
  padding:0;
`;
const Line = styled.div`
  margin:0;
  padding:0;
  border-bottom:1px solid #935d8c;
`;
const Main = () => {
  return (
    <Div0>
      <SectionA />
      <Line />
      <SectionB />
      <Line />
      <SectionC />
      <Line />
      <SectionD />
    </Div0>
  )
}

export default Main