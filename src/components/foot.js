import React from "react"
import Image from "gatsby-image"
import styled from "styled-components"
import Link from "./link"

const Footer = styled.footer`
  max-width: 960px;
  margin: 0 auto;
  padding-top: 10rem;
`

const Header = styled.h2`
  font-size: 2.4rem;
  text-align: center;
  padding-bottom: 2rem;
`

const ContactCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 5rem;
`

const ContactCard = styled.div`
  flex: 1;
  text-align: center;
  padding: 3.2rem 0;
`

const ContactHeader = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
`

const ContactLink = styled(Link)`
  font-size: 1.6rem;
`

const PhotoContainer = styled.div`
  padding-top: 2rem;
  padding-bottom: 10rem;
  text-align: center;
`

const MyPhoto = styled(Image)`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  margin: 0 auto 1rem;
`

const Copyright = styled.span`
  font-size: 1.2rem;
`

function Foot({ myImageData }) {
  return (
    <Footer>
      <Header>Contact me. We can build something together</Header>
      <ContactCards>
        <ContactCard>
          <ContactHeader>Email</ContactHeader>
          <ContactLink to="mailto:mickykebe@gmail.com" target="_blank">
            mickykebe@gmail.com
          </ContactLink>
        </ContactCard>
        <ContactCard>
          <ContactHeader>Resume</ContactHeader>
          <ContactLink
            to="https://drive.google.com/open?id=1gwJIBs2N5LvJSBMmpBqChn3CwC-S--tX"
            target="_blank"
          >
            Download
          </ContactLink>
        </ContactCard>
        <ContactCard>
          <ContactHeader>Message</ContactHeader>
          <ContactLink
            to="https://www.linkedin.com/in/mickykebe/"
            target="_blank"
          >
            LinkedIn
          </ContactLink>
        </ContactCard>
      </ContactCards>
      <PhotoContainer>
        <MyPhoto fluid={myImageData} />
        <Copyright>&copy; Michael K. Tedla</Copyright>
      </PhotoContainer>
    </Footer>
  )
}

export default Foot
