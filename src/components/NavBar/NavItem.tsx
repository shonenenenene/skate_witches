import styled, { css } from 'styled-components';
import { FC } from 'react';
import { NavDropdown, NavDropdownItem } from '../UI';

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
        id?: number;
        content?: {
            id: number;
            label: string;
        }[];
    };
    setActiveNav: React.Dispatch<React.SetStateAction<string | null>>;
    activeNav: string | null;
    fullscreenWindow: boolean;
    setFullscreenWindow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavItem: FC<NavItemProps> = ({ item, setActiveNav, activeNav, fullscreenWindow, setFullscreenWindow }) => {
    const isActiveNav = activeNav === item.name;

    return (
        <StyledNavItem color={isActiveNav ? '#ffffff' : '#ffffff0'} onClick={() => setActiveNav(isActiveNav ? null : item.name)}>
            {item.name}
            {isActiveNav ? (
                <NavDropdown>
                    {item.content?.map((e) =>
                        e.label === '🗖 fullscreen' ? (
                            <NavDropdownItem onClick={() => (fullscreenWindow ? setFullscreenWindow(false) : setFullscreenWindow(true))}>
                                {e.label}
                            </NavDropdownItem>
                        ) : (
                            <NavDropdownItem key={e.id}>{e.label}</NavDropdownItem>
                        )
                    )}
                </NavDropdown>
            ) : null}
        </StyledNavItem>
    );
};

{
    /* <CustomButton onClick={() => (fullscreenWindow ? setFullscreenWindow(false) : setFullscreenWindow(true))}>
    🗖 fullscreen
</CustomButton> */
}
