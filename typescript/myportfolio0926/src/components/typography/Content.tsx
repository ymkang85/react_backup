import React from 'react'
import styled from 'styled-components'
import Heading from './Heading'
import Paragraph from './Paragraph'
import HeadingInterface, {HeadingColor} from '../../modules/HeadingInterface'
import { ParagraphColor } from '../../modules/ParagraphInterface'

export type ContentInterface = {
    heading: string;
    paragraph: string;
    headingColor: HeadingColor;
    paragraphColor : ParagraphColor;
    className? : string;
} & HeadingInterface;

const Content = ({
    heading,
    variant,
    paragraph,
    headingColor,
    paragraphColor,
    className
}: ContentInterface) => {
  return (
    <ContentWrapper>
      <Heading variant={variant} color={headingColor}>
        {heading}
      </Heading>
      <Paragraph color={paragraphColor}>
         {paragraph}
      </Paragraph>
    </ContentWrapper>
  )
}

const ContentWrapper = styled.div`
   display:flex;
   flex-direction: column;
   gap: 1rem;

   @media (min-width: 768px) {
      gap: 1.5rem;
   }
   @media (min-width: 1024px) {
      text-align:left;
   }
`;

export default Content