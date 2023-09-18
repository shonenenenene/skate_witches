import styled from 'styled-components';
import { FC } from 'react';

const StyledNavItem = styled.a`
    padding: 5px 10px;
    cursor: pointer;
    &:hover {
        background-color: white;
        color: black;
        transition: 0.3s;
    }
`;

export interface NavItemProps {
    text: string;
    link?: string;
}

export const NavItem: FC<NavItemProps> = ({ text }) => {
    return <StyledNavItem>{text}</StyledNavItem>;
};
