import styled from 'styled-components'
import NavItem from './NavItem'
import CloseButton from './UI/Button'
import { navs } from '../constants'

const NavBar = () => {

    const StyledNavBar = styled.nav`
        background-color: rgb(0, 0, 124);
        height: 35px;
        padding: 0 40px;
        padding-right: 15px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 15px;
        border-bottom: 2px solid whitesmoke;
        button {
          margin-left: auto;
          padding-bottom: 2px;
        }
        @media (max-width: 632px) {
          
        }
    `

  return (
    <StyledNavBar>
        {navs.map((e) => <NavItem key={e.id} text={e.name}/>)}
        <CloseButton/>
    </StyledNavBar>
  )
}

export default NavBar