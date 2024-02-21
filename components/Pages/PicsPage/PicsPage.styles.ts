import { css, styled } from 'styled-components';

export const StyledPicsPage = styled.div`
    height: 100%;
    width: 100%;
`;

export const StyledPicsForm = styled.form`
    position: relative;
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    gap: 10px;
    background-color: #00007c;
    input {
        width: 50%;
        height: 40px;
        padding: 0 30px;
        background-color: #0000aa;
        text-align: center;
        min-width: 160px;
    }
    button {
        position: absolute;
        left: 2%;
        top: 0;
        height: 40px;
        width: 40px;
        font-size: 26px;
    }
`;

export const StyledPicsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    gap: 10px;
`;
export const StyledPicsHandler = styled.button`
    background-color: #ffffff1d;
    max-width: 120px;
    min-width: 60px;
    height: 100%;
    font-size: 30px;
    flex-grow: 1;
    &:hover {
        background-color: #ffffff4c;
        transition: 0.3s;
    }
`;

export const StyledPicList = styled.div<{ isselected: number | null }>`
    height: 80%;
    width: 100%;
    padding: 30px;
    grid-template-columns: repeat(5, 1fr);
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

export const StyledPicPaginator = styled.div`
    place-self: center;
    grid-column-start: 3;
    background-color: #00007c;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
`;

export const StyledPicsPaginatorHandler = styled.button`
    background-color: #ffffff1d;
    height: 40px;
    width: 40px;
    font-size: 20px;
    &:hover {
        background-color: #ffffff4c;
        transition: 0.3s;
    }
`;

export const StyledPicsNothingFound = styled.div`
    padding-top: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 40px;
`;
