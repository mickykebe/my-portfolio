import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Hero from "../components/hero"

const Main = styled.main``

export const query = graphql`
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
`

export default ({ data }) => (
  <Layout>
    <Main>
      <Hero imageData={data.file.childImageSharp.fixed} />
    </Main>
  </Layout>
)
