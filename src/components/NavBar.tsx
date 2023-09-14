import styled from 'styled-components';
import NavItem from './NavItem';
import CustomButton from './UI/CustomButton';
import { navs } from '../constants';

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
    @media (max-width: 632px) {
    }
`;

const NavBar = () => {
    return (
        <StyledNavBar>
            {navs.map((e) => (
                <NavItem key={e.id} text={e.name} />
            ))}
            <CustomButton text='x' />
        </StyledNavBar>
    );
};

export default NavBar;
