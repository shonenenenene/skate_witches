import styled, { css } from 'styled-components';

export const CustomButton = styled.button`
    min-height: 35px;
    text-shadow: inherit;
    width: 100%;
    ${({ color }) => css`
        color: ${color || '#fff'};
    `};
`;

export const NavDropdown = styled.div`
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
`;

export const NavDropdownItem = styled.div`
    color: #000;
    padding: 3px 3px 5px 8px;
    cursor: pointer;
    &:hover {
        background-color: #bcccff;
    }
`;
