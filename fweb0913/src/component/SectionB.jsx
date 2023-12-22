import React from 'react'
import { RiBankFill } from "react-icons/ri";
import Card from './Card';
const cardList = [
  {
    greenTitle: "inspiratio",
    title: "Branding",
    img: "images/features1.jpg",
    content:"어디 우리의 바이며, 사라지지 석가는 이상은 부패뿐이다. 간에 사는가 이상, 것이다. 수 영원히 수 지혜는 밥을 따뜻한 원대하고, 봄바람이다. 대한 길을 능히 수 거선의 가치를 것이다."
  },
  {
    greenTitle: "research",
    title: "Marketing",
    img: "images/features2.jpg",
    content:"가치를 있는 보이는 황금시대를 어디 방황하였으며, 새가 뿐이다. 끝에 얼음에 무한한 만천하의 따뜻한 귀는 것이다."
  },
  {
    greenTitle: "branding",
    title: "Design",
    img: "images/features3.jpg",
    content:"가장 길을 속잎나고, 안고, 반짝이는 청춘 현저하게 풍부하게 사라지지 봄바람이다. 풀이 청춘의 없으면 새가 천고에 얼마나 모래뿐일 있다. 듣기만 청춘은 가진 피는 넣는 든 아니다."
  }
];

const SectionB = () => {
  return (
    <div className='container section-b'>
      <div className='title'>
        <h1><span><RiBankFill /></span>Our Service</h1>
      </div>
      <div className="row">
        <Card {...cardList[0]} />
        <Card {...cardList[1]} />
        <Card {...cardList[2]} />
      </div>
    </div>
  )
}

export default SectionB