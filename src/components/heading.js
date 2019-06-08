import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Header = styled.header`
  position: fixed;
  background-color: white;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: ${({ windowScrolled }) =>
    windowScrolled ? "0 1px 3px rgba(0, 0, 0, 0.2)" : "initial"};
  z-index: 100;
`

const Navigation = styled.nav`
  display: flex;
  padding: 8px 16px;
  align-items: center;
  height: 48px;
`

const NameLink = styled(Link)`
  font-weight: 700;
  font-size: 2.4rem;
  text-decoration: none;
  color: var(--color-grey-dark);
`

const Spacer = styled.div`
  flex: 1;
`

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
`

const NavListItem = styled.li`
  padding-right: 16px;
  margin: 0;
`

export default function Heading() {
  const [windowScrolled, setWindowScrolled] = React.useState(window.scrollY > 0)
  const handleWindowScroll = () => {
    setWindowScrolled(window.scrollY > 0)
  }
  React.useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll)
    return () => window.removeEventListener("scroll", handleWindowScroll)
  }, [handleWindowScroll])

  return (
    <Header windowScrolled={windowScrolled}>
      <Navigation>
        <NameLink to="/">Michael K. Tedla</NameLink>
        <Spacer />
        <NavList>
          <NavListItem>LinkedIn</NavListItem>
          <NavListItem>Resume</NavListItem>
        </NavList>
      </Navigation>
    </Header>
  )
}
