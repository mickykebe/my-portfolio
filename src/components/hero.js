import React from "react"

import styled from "styled-components"
import Image from "gatsby-image"

const Root = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 6rem 1.6rem;
  max-width: 960px;
  margin: 0 auto;

  @media (max-width: 37.5em) {
    text-align: justify;
  }
`

const HeroHeader = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 37.5em) {
    flex-direction: column;
    padding-bottom: 4rem;
  }
`

const HeroHeaderText = styled.h2`
  font-size: 2.4rem;
  flex: 1;
  margin: 0 0 0 1.6rem;
  @media (max-width: 37.5em) {
    margin: 0;
  }
`

const HeroDescription = styled.div`
  margin-left: 14rem;
  font-size: 2rem;
  line-height: 1.5;
  @media (max-width: 37.5em) {
    margin-left: 0;
  }
`

const Paragraph = styled.p`
  margin-bottom: 1.6rem;
`

const MyPhoto = styled(Image)`
  width: 12rem;
  height: 12rem;
  box-shadow: 0 1px 3px 1px rgba(200, 200, 200, 1);
  @media (max-width: 37.5em) {
    margin-bottom: 2rem;
  }
`

export default function Hero({ imageData }) {
  return (
    <Root>
      <HeroHeader>
        <MyPhoto fluid={imageData} />
        <HeroHeaderText>
          Hi, I'm Michael. I'm a mobile and web app engineer in Houston, TX.
        </HeroHeaderText>
      </HeroHeader>
      <HeroDescription>
        <Paragraph>
          I've been designing web and mobile apps for over 5 years. I'm a full
          stack engineer and mobile app engineer working with Javascript, React,
          Node and Flutter.
        </Paragraph>
        <Paragraph>Here are a few of my projects:</Paragraph>
      </HeroDescription>
    </Root>
  )
}
