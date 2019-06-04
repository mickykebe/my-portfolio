import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Hero from "../components/hero"

const Main = styled.main``

export const query = graphql`
  query {
    file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fixed(width: 120, height: 120) {
          ...GatsbyImageSharpFixed
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
