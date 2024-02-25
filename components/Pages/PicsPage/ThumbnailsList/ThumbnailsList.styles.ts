import { css, styled } from 'styled-components';

export const StyledPicList = styled.div<{ isselected: number | null }>`
    overflow-y: auto;
    height: 88.5%;
    width: 100%;
    padding: 30px;
    grid-template-columns: repeat(5, 1fr);
    align-items: start;
    gap: 15px 30px;
    box-sizing: border-box;

    img {
        cursor: pointer;
        object-fit: scale-down;
        width: 180px;
        height: 180px;
    }

    ${({ isselected }) =>
        isselected !== null
            ? css`
                  display: none;
              `
            : css`
                  display: grid;
              `}

    @media (max-width: 970px) {
        grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 632px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const StyledPicsMessage = styled.div`
    padding: 200px 50px 50px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 40px;
    gap: 20px;
    span {
        font-size: 20px;
        color: #fff;
        font-weight: 100;
    }
`;
