import styled, { css } from 'styled-components';

export const CustomButton = styled.button`
    font-size: inherit;
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
    z-index: 99;
    top: 32px;
    left: 0;
    background-color: #ffffff;
    width: 180px;
    height: 90px;
`;

export const NavDropdownItem = styled.div`
    color: #000;
    padding: 3px 3px 5px 8px;
    &:hover {
        background-color: #bcccff;
    }
`;
