import React from "react"

import styled from "styled-components"
import Image from "gatsby-image"
import Link from "./link"

const Root = styled.section`
  width: 800px;
  margin: 0 auto;
  padding: 60px 0px;
`

const HeroHeader = styled.div`
  display: flex;
  align-items: center;
`

const HeroHeaderText = styled.h2`
  font-size: 2.4rem;
  flex: 1;
  margin: 0 0 0 16px;
`

const HeroDescription = styled.div`
  margin-left: 136px;
  font-size: 2rem;
  line-height: 1.5;
`

const Paragraph = styled.p`
  margin-bottom: 1.6rem;
`

const MyPhoto = styled(Image)`
  width: 12rem;
  height: 12rem;
  box-shadow: 0 1px 3px 1px rgba(200, 200, 200, 1);
`

export default function Hero({ imageData }) {
  return (
    <Root>
      <HeroHeader>
        <MyPhoto fluid={imageData} />
        <HeroHeaderText>
          Hi, I'm Michael. I'm a mobile and web app engineer in Addis Ababa,
          Ethiopia.
        </HeroHeaderText>
      </HeroHeader>
      <HeroDescription>
        <Paragraph>
          I've been designing web and mobile apps for over 5 years. I'm a full
          stack engineer and mobile app engineer working with Javascript, React,
          Node and Flutter.
        </Paragraph>
        <Paragraph>
          I currently work as a senior full stack engineer at{" "}
          <Link
            to="https://www.langbot.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Langbot
          </Link>{" "}
          building the platform's bot and content management system.
        </Paragraph>
        <Paragraph>
          In my spare time I work on{" "}
          <Link
            to="https://play.google.com/store/apps/details?id=com.fentale.zena"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zena app
          </Link>
          , which is an Ethiopian news aggregator app I built.
        </Paragraph>
      </HeroDescription>
    </Root>
  )
}
