import styled, { css } from 'styled-components';
import { FC, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import PrintLink from '@/ui/PrintLink';

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
    animation: slide 0.1s ease 0.1s 1 normal both;
    @keyframes slide {
        0% {
            transform: scaleY(0) translateY(-90%);
        }
        100% {
            transform: scaleY(1) translateY(0);
        }
    }
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
    border: 2px solid #b1b1b1;
    border-width: 0 0 1px 0;
    &:last-child {
        border: none;
    }
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

    const closeNavDropdown = (e: MouseEvent) => {
        if (dropdownRef.current && activeNav && !dropdownRef.current.contains(e.target as Node)) {
            setActiveNav(null);
        }
    };

    useEffect(() => {
        if (!document) {
            return;
        }

        if (isActiveNav) {
            document?.addEventListener('mousedown', closeNavDropdown);
        } else {
            document?.removeEventListener('mousedown', closeNavDropdown);
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
                            <NavDropdownItem
                                key={e.id}
                                onClick={() => (fullscreenWindow ? setFullscreenWindow(false) : setFullscreenWindow(true))}
                            >
                                {fullscreenWindow ? e.label + ' off' : e.label + ' on'}
                            </NavDropdownItem>
                        ) : e.label === 'Print' ? (
                            <NavDropdownItem key={e.id}>
                                <PrintLink />
                            </NavDropdownItem>
                        ) : (
                            <NavDropdownItem
                                onClick={() => {
                                    router.push(e.path || '');
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
