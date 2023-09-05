import styled from "styled-components"
import { INavItem } from "../types"
import { FC } from "react"

const NavItem:FC<INavItem> = ({text}) => {

    const StyledNavItem = styled.a`
        padding: 5px 10px;
        &:hover {
            background-color: white;
            color: black;
            transition: 0.3s;
        }
    `

  return (
    <StyledNavItem>
        {text}
    </StyledNavItem>
  )
}

export default NavItem