import styled from 'styled-components'
import NavItem from './NavItem'

const NavBar = () => {

    const StyledNavBar = styled.nav`
        background-color: rgb(0, 0, 124);
        padding: 0 40px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 15px;
        border-bottom: 2px solid whitesmoke;
    `

  return (
    <StyledNavBar>
        <NavItem text='file'/>
        <NavItem text='options'/>
        <NavItem text='prikols'/>
        <NavItem text='about'/>
        <NavItem text='arabfunny'/>
    </StyledNavBar>
  )
}

export default NavBar