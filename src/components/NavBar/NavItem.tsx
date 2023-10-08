import styled from 'styled-components';
import { FC, useState } from 'react';
import { NavDropdown } from '../UI';

const StyledNavItem = styled.div`
    position: relative;
    padding: 5px 10px;
    cursor: pointer;
    &:hover {
        background-color: white;
        color: black;
        transition: 0.3s;
    }
`;

interface NavItemProps {
    item: {
        name: string;
    };
}

export const NavItem: FC<NavItemProps> = ({ item }) => {
    const [dropdownIsOpen, setDropdownIsOpen] = useState<boolean>(false);

    return (
        <StyledNavItem onClick={() => setDropdownIsOpen(!dropdownIsOpen)}>
            {item.name}
            {dropdownIsOpen ? <NavDropdown>SOON</NavDropdown> : null}
        </StyledNavItem>
    );
};
