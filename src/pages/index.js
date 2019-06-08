import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Foot from "../components/foot"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Project from "../components/project"

const Main = styled.main`
  max-width: 960px;
  margin: 0 auto;
`

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/me.jpg" }) {
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
      <Main>
        <Hero imageData={selfImageData} />
        <section>
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
        </section>
      </Main>
      <Foot myImageData={selfImageData} />
    </Layout>
  )
}
