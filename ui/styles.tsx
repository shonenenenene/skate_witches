import styled, { css } from 'styled-components';

export const CustomButton = styled.button`
    min-height: 35px;
    text-shadow: inherit;
    width: 100%;
    ${({ color }) => css`
        color: ${color || '#fff'};
    `};
`;
