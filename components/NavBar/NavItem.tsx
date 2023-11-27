import styled, { css } from 'styled-components';
import { FC } from 'react';

const StyledNavItem = styled.div`
    position: relative;
    padding: 5px 10px;
    margin: 3px 0;
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

const NavDropdown = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    cursor: auto;
    z-index: 1;
    top: 32px;
    left: 0;
    background-color: #ffffff;
    width: 180px;
    height: 90px;
    @media (max-width: 539px) {
        width: 100%;
        position: relative;
        top: 0;
        margin-top: 20px;
    }
`;

const NavDropdownItem = styled.div`
    color: #000;
    padding: 6px 3px 8px 8px;
    cursor: pointer;
    border-bottom: 1px solid #b1b1b1;
    border-top: 1px solid #b1b1b1;
    &:hover {
        background-color: #bcccff;
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
                                {fullscreenWindow ? e.label + ' off' : e.label + ' on'}
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
