import { css, styled } from 'styled-components';
import Image from 'next/image';

export const StyledPicsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    gap: 10px;
`;
export const StyledPicsButton = styled.button`
    background-color: #ffffff1d;
    max-width: 60px;
    min-width: 60px;
    height: 100%;
    font-size: 30px;
    flex-grow: 1;
    &:hover {
        background-color: #ffffff4c;
        transition: 0.3s;
    }
`;

export const StyledImage = styled(Image)<{ isLoaded: boolean }>`
    @keyframes unblur {
        from {
            filter: blur(10px);
        }
        to {
            filter: blur(0);
        }
    }
    ${({ isLoaded }) =>
        isLoaded
            ? css`
                  animation: unblur 0.3s linear;
              `
            : css`
                  filter: blur(10px);
              `}
`;
