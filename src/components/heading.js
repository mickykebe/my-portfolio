import React from "react"
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
  height: 64px;
`

const NameHeader = styled.h2`
  flex: 1;
  margin: 0;
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
        <NameHeader>Michael K. Tedla</NameHeader>
        <NavList>
          <NavListItem>LinkedIn</NavListItem>
          <NavListItem>Resume</NavListItem>
        </NavList>
      </Navigation>
    </Header>
  )
}
