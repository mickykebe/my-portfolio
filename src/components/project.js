import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import Link from "./link"

const Root = styled.div`
  display: flex;
  padding: 0 3.2rem;
  align-items: center;
  min-height: 300px;
  margin-bottom: 3.2rem;
  background-color: #f8fafc;
  @media (max-width: 37.5em) {
    flex-direction: column;
    align-items: flex-start;
    padding: 3.2rem;
  }
`

const ProjectColumn = styled.div`
  flex: 1;
`

const DescriptionColumn = styled(ProjectColumn)`
  padding-right: 1.6rem;
  @media (max-width: 37.5em) {
    padding-right: 0;
    padding-bottom: 2rem;
  }
`

const ImageColumn = styled(ProjectColumn)`
  @media (max-width: 37.5em) {
    width: 100%;
  }
`

const H3 = styled.h3`
  font-size: 2rem;
  margin-bottom: 0.4rem;
`

const Sub = styled.sub`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: var(--color-grey-dark-2);
  display: block;
`

const Paragraph = styled.p`
  font-size: 1.6rem;
  margin-bottom: 1.6rem;
`

export default function Project({
  title,
  url,
  duration,
  description,
  imageData,
}) {
  return (
    <Root>
      <DescriptionColumn>
        <H3>
          <Link to={url} target="_blank">
            {title}
          </Link>
        </H3>
        <Sub>{duration}</Sub>
        <Paragraph>{description}</Paragraph>
      </DescriptionColumn>
      <ImageColumn>
        <Image fluid={imageData} alt={title} />
      </ImageColumn>
    </Root>
  )
}
