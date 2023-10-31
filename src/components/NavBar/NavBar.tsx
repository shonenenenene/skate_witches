import styled from 'styled-components';
import { CustomButton } from '../UI';
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
    border-radius: 6px 6px 0 0;
    background-color: #00007c;
    button {
        margin-left: auto;
        padding-bottom: 2px;
    }
`;

const StyledToLogo = styled.div`
    cursor: pointer;
    font-size: 22px;
    padding: 0 5px;
    &:hover {
        transition: 0.3s all;
        background-color: #0000e9;
    }
`;

interface NavBarProps {
    setPage: React.Dispatch<React.SetStateAction<string>>;
    isPageOpen: boolean;
    setTurnOn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavBar = ({ setTurnOn, setPage, isPageOpen }: NavBarProps) => {
    const [activeNav, setActiveNav] = useState<string | null>(null);

    return (
        <StyledNavBar>
            <StyledToLogo
                onClick={() => {
                    setPage('logo');
                }}
            >
                🔮🧙‍♂️
            </StyledToLogo>
            {navs.map((item) => (
                <NavItem activeNav={activeNav} setActiveNav={setActiveNav} item={item} key={item.id} />
            ))}
            {isPageOpen ? (
                <CustomButton
                    onClick={() => {
                        setPage('');
                    }}
                >
                    ⮪
                </CustomButton>
            ) : (
                <CustomButton
                    onClick={() => {
                        setTurnOn(false);
                    }}
                >
                    x
                </CustomButton>
            )}
        </StyledNavBar>
    );
};
