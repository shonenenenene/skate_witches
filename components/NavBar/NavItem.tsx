import styled, { css } from 'styled-components';
import { FC, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

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
    height: fit-content;
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
    border: 1px solid #b1b1b1;
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
            path?: string;
        }[];
    };
    setActiveNav: React.Dispatch<React.SetStateAction<string | null>>;
    activeNav: string | null;
    fullscreenWindow: boolean;
    setFullscreenWindow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavItem: FC<NavItemProps> = ({ item, setActiveNav, activeNav, fullscreenWindow, setFullscreenWindow }) => {
    const isActiveNav = activeNav === item.name;
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const router = useRouter();

    const closeOpenMenus = (e: MouseEvent) => {
        if (dropdownRef.current && activeNav && !dropdownRef.current.contains(e.target as Node)) {
            setActiveNav(null);
        }
    };

    useEffect(() => {
        if (!document) {
            return;
        }

        if (isActiveNav) {
            document?.addEventListener('mousedown', closeOpenMenus);
        } else {
            document?.removeEventListener('mousedown', closeOpenMenus);
        }
    }, [activeNav]);

    return (
        <StyledNavItem
            color={isActiveNav ? '#ffffff' : '#ffffff0'}
            onClick={() => {
                if (!isActiveNav) {
                    setActiveNav(item.name);
                }
            }}
        >
            {item.name}
            {isActiveNav ? (
                <NavDropdown ref={dropdownRef}>
                    {item.content?.map((e) =>
                        e.label === '🗖 fullscreen' ? (
                            <NavDropdownItem onClick={() => (fullscreenWindow ? setFullscreenWindow(false) : setFullscreenWindow(true))}>
                                {fullscreenWindow ? e.label + ' off' : e.label + ' on'}
                            </NavDropdownItem>
                        ) : (
                            <NavDropdownItem
                                onClick={() => {
                                    router.push('asdasd');
                                    setActiveNav(null);
                                }}
                                key={e.id}
                            >
                                {e.label}
                            </NavDropdownItem>
                        )
                    )}
                </NavDropdown>
            ) : null}
        </StyledNavItem>
    );
};
