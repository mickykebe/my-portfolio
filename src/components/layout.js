import React from "react"
import styled from "styled-components"
import Heading from "./heading"

const Container = styled.div`
  padding-top: 64px;
`

export default function Layout({ children }) {
  return (
    <Container>
      <Heading />
      {children}
    </Container>
  )
}
