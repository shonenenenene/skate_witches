import styled from 'styled-components';
import { CustomButton } from '../UI';
import { navs } from '../../constants';
import { NavItem } from './NavItem';

const StyledNavBar = styled.nav`
    height: 35px;
    padding: 0 40px;
    padding-right: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
    border-bottom: 2px solid whitesmoke;
    background-color: rgb(0, 0, 124);
    button {
        margin-left: auto;
        padding-bottom: 2px;
    }
`;

interface NavBarProps {
    setPage: React.Dispatch<React.SetStateAction<string>>;
    isPageOpen: boolean;
    setTurnOn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavBar = ({ setTurnOn, setPage, isPageOpen }: NavBarProps) => {
    return (
        <StyledNavBar>
            {navs.map((e) => (
                <NavItem item={e} key={e.id} />
            ))}
            {isPageOpen ? (
                <CustomButton
                    onClick={() => {
                        setPage('');
                    }}
                >
                    ⬷
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
