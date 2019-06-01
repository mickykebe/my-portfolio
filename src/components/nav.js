import React from "react"
import styled from "styled-components"

const Navigation = styled.nav`
  height: 48px;
  background: ${({ windowScrolled }) => (windowScrolled ? "black" : "white")};
`

export default function Nav() {
  const [windowScrolled, setWindowScrolled] = React.useState(window.scrollY > 0)
  const handleWindowScroll = () => {
    setWindowScrolled(window.scrollY > 0)
  }
  React.useEffect(() => {
    console.log("attaching scroll handler")
    window.addEventListener("scroll", handleWindowScroll)
    return () => window.removeEventListener("scroll", handleWindowScroll)
  }, [handleWindowScroll])

  return <Navigation windowScrolled={windowScrolled} />
}
