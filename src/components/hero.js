import React from "react"

import Img from "gatsby-image"
import styled from "styled-components"

const Root = styled.section`
  width: 800px;
  margin: 0 auto;
  padding: 60px 0px;
`

const HeroHeader = styled.div`
  display: flex;
  align-items: center;
`

const LogoImage = styled(Img)`
  border-radius: 50%;
`

const HeroHeaderText = styled.h2`
  flex: 1;
  margin: 0 0 0 16px;
`

const HeroDescription = styled.div`
  margin-left: 136px;
`

export default function Hero({ imageData }) {
  return (
    <Root>
      <HeroHeader>
        <LogoImage fixed={imageData} />
        <HeroHeaderText>
          Hi, I'm Michael. I'm a mobile and web app engineer in Addis Ababa,
          Ethiopia.
        </HeroHeaderText>
      </HeroHeader>
      <HeroDescription>
        <p>
          I've been designing web and mobile apps for over 5 years. I'm a full
          stack engineer and mobile app engineer working with Javascript, React,
          Node and Flutter.
        </p>
        <p>
          I currently work as a senior full stack engineer at{" "}
          <a href="https://www.langbot.io" target="_blank">
            Langbot
          </a>{" "}
          building the platform's bot and content management system.
        </p>
        <p>
          In my spare time I work on{" "}
          <a
            href="https://play.google.com/store/apps/details?id=com.fentale.zena"
            target="_blank"
          >
            Zena app
          </a>
          , which is an Ethiopian news aggregator app I built.
        </p>
      </HeroDescription>
    </Root>
  )
}
