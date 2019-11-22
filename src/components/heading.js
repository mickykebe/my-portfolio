import React from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"
import FileTextIcon from "../../assets/file-text.svg"
import LinkedInIcon from "../../assets/linkedin.svg"

const navIconStyles = css`
  width: 1.6rem;
  height: 1.6rem;
  margin-right: 0.8rem;
`

const StyledFileTextIcon = styled(FileTextIcon)`
  ${navIconStyles}
`

const StyledLinkedInIcon = styled(LinkedInIcon)`
  ${navIconStyles}
`

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

const NavLink = styled.a`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1.6rem;
  color: var(--color-grey-dark);
  text-decoration: none;
  :hover {
    color: var(--primary-color);
  }
`

export default function Heading() {
  const [windowScrolled, setWindowScrolled] = React.useState(false)
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
          <NavListItem>
            <NavLink
              href="https://www.linkedin.com/in/mickykebe/"
              target="_blank"
            >
              <StyledLinkedInIcon />
              LinkedIn
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink
              href="https://drive.google.com/file/d/1zcBg-nhGLH_zh3ltpEGBx26dDiaxJxYs/view"
              target="_blank"
            >
              <StyledFileTextIcon />
              Resume
            </NavLink>
          </NavListItem>
        </NavList>
      </Navigation>
    </Header>
  )
}
