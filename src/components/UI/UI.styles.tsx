import styled, { css } from 'styled-components';

export const CustomButton = styled.button`
    font-size: 20px;

    ${({ color }) => css`
        color: ${color || '#fff'};
    `};
`;
