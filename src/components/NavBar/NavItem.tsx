import styled from 'styled-components';
import { FC, PropsWithChildren } from 'react';

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
    onClick: () => void;
}

export const NavItem: FC<PropsWithChildren<NavItemProps>> = ({ children, onClick }) => {
    return <StyledNavItem onClick={onClick}>{children}</StyledNavItem>;
};
