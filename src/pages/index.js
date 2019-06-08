import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
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
          fixed(width: 120, height: 120) {
            ...GatsbyImageSharpFixed
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
  return (
    <Layout>
      <Main>
        <Hero imageData={data.file.childImageSharp.fixed} />
        <section>
          {projects.map(({ node: project }) => {
            console.log(project)
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
    </Layout>
  )
}
