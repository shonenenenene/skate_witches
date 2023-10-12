import styled, { css } from 'styled-components';
import { FC } from 'react';
import { NavDropdown } from '../UI';

const StyledNavItem = styled.div`
    position: relative;
    padding: 5px 10px;
    cursor: pointer;
    ${({ color }) => css`
        background-color: ${color || '#ffffff0'};
        color: ${color === '#ffffff' ? '#000' : '#ffffff'};
    `};
    &:hover {
        background-color: #ffffff;
        color: #000;
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
        <StyledNavItem color={isActiveNav ? '#ffffff' : '#ffffff0'} onClick={() => setActiveNav(isActiveNav ? null : item.name)}>
            {item.name}
            {isActiveNav ? <NavDropdown>SOON</NavDropdown> : null}
        </StyledNavItem>
    );
};
