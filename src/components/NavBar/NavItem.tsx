import styled from 'styled-components';
import { FC } from 'react';
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
    setActiveNav: React.Dispatch<React.SetStateAction<string | null>>;
    activeNav: string | null;
}

export const NavItem: FC<NavItemProps> = ({ item, setActiveNav, activeNav }) => {
    const isActiveNav = activeNav === item.name;

    return (
        <StyledNavItem onClick={() => setActiveNav(isActiveNav ? null : item.name)}>
            {item.name}
            {isActiveNav ? <NavDropdown>SOON</NavDropdown> : null}
        </StyledNavItem>
    );
};
