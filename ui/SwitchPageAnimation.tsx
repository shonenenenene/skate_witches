import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const StyledSwitchPageAnimation = styled.div`
    width: 100%;
    height: 100%;
    animation: render-page 0.4s ease 0.1s 1 normal both;
    @keyframes render-page {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }
`;

export const SwitchPageAnimationProvider = ({ children }: PropsWithChildren) => {
    return <StyledSwitchPageAnimation>{children}</StyledSwitchPageAnimation>;
};
