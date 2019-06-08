import React from "react"
import { Link as GatsbyLink } from "gatsby"
import styled, { css } from "styled-components"

const linkStyles = css`
  fontsize: 1.6rem;
  color: var(--primary-color);
  padding-bottom: 3px;
  border-bottom: 1px solid var(--primary-color);
  text-decoration: none;

  :hover {
    color: var(--primary-color-dark);
  }
`

const StyledGatsbyLink = styled(GatsbyLink)`
  ${linkStyles}
`

const StyledA = styled.a`
  ${linkStyles}
`

const Link = ({ children, to, activeClassName, partiallyActive, ...other }) => {
  const internal = /^\/(?!\/)/.test(to)

  if (internal) {
    return (
      <StyledGatsbyLink
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </StyledGatsbyLink>
    )
  }
  return (
    <StyledA href={to} {...other}>
      {children}
    </StyledA>
  )
}

export default Link
