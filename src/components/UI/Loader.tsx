import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const StyledLoader = styled.div`
    width: 100%;
    height: 12px;
    display: inline-block;
    background-color: #ea36af;
    background-image: linear-gradient(
        45deg,
        rgb(0, 0, 233) 25%,
        transparent 25%,
        transparent 50%,
        rgba(0, 0, 233) 50%,
        rgba(0, 0, 233) 75%,
        transparent 75%,
        transparent
    );
    font-size: 30px;
    background-size: 1em 1em;
    box-sizing: border-box;
    animation: barStripe 1s linear infinite;

    @keyframes barStripe {
        0% {
            background-position: 1em 0;
        }
        100% {
            background-position: 0 0;
        }
    }
`;

interface LoaderProviderProps {
    isLoading?: boolean;
}

export const LoaderProvider = ({ children, isLoading }: PropsWithChildren<LoaderProviderProps>) => {
    return <>{isLoading ? <StyledLoader></StyledLoader> : children}</>;
};
