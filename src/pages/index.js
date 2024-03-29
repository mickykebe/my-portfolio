import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Foot from "../components/foot"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Project from "../components/project"

const Main = styled.main``

const ProjectsSection = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.6rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  @media (max-width: 950px) {
    grid-template-columns: 1fr;
  }
`

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/my-photo.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      allProjectsJson {
        edges {
          node {
            title
            url
            duration
            description
            tags
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)
  const projects = data.allProjectsJson.edges
  const selfImageData = data.file.childImageSharp.fluid
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Michael Tedla - Web app developer</title>
        <link rel="canonical" href="https://mickykebe.com/" />
      </Helmet>
      <Main>
        <Hero imageData={selfImageData} />
        <ProjectsSection>
          {projects.map(({ node: project }) => {
            const { title, description, url, duration, image } = project
            const imageData = image.childImageSharp.fluid
            return (
              <Project
                key={url}
                title={title}
                description={description}
                url={url}
                duration={duration}
                imageData={imageData}
              />
            )
          })}
        </ProjectsSection>
      </Main>
      <Foot myImageData={selfImageData} />
    </Layout>
  )
}
