import styled from 'styled-components';

export const StyledNavBar = styled.nav`
    box-sizing: border-box;
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
        width: 42px;
    }
`;

export const StyledToLogo = styled.div`
    cursor: pointer;
    font-size: 22px;
    padding: 0 5px;
    &:hover {
        transition: 0.3s all;
        background-color: #0000e9;
    }
`;

export const StyledNavBtnsWrapper = styled.div`
    position: absolute;
    right: 2px;
    display: flex;
    align-items: center;
`;
