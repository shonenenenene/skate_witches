import styled from 'styled-components';
import { CustomButton, NavDropdown, NavDropdownItem } from '../UI';
import { navs } from '../../constants';
import { NavItem } from './NavItem';
import { useState } from 'react';

const StyledNavBar = styled.nav`
    height: 35px;
    padding: 0 40px;
    padding-right: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
    border-bottom: 2px solid whitesmoke;
    background-color: rgb(0, 0, 124);
    button {
        margin-left: auto;
        padding-bottom: 2px;
    }
`;

interface NavBarProps {
    setPage: React.Dispatch<React.SetStateAction<string>>;
    isPageOpen: boolean;
}

export const NavBar = ({ setPage, isPageOpen }: NavBarProps) => {
    const [dropdownIsOpen, setDropdownIsOpen] = useState<boolean>(false);
    return (
        <StyledNavBar>
            {navs.map((e) => (
                <NavItem onClick={() => setDropdownIsOpen(!dropdownIsOpen)} key={e.id}>
                    {e.name}
                    {dropdownIsOpen ? <NavDropdown>{e.name}</NavDropdown> : null}
                </NavItem>
            ))}
            <CustomButton
                onClick={() => {
                    setPage('');
                }}
            >
                {isPageOpen ? '<' : 'x'}
            </CustomButton>
        </StyledNavBar>
    );
};
