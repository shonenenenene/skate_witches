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
        width: 70%;
        height: 40px;
        padding: 0 40px;
        background-color: #0000aa;
        text-align: center;
        min-width: 160px;
    }
    button {
        position: absolute;
        left: 15.3%;
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

export const StyledPicList = styled.div<{ isselected: number | null }>`
    overflow-y: auto;
    height: 88.5%;
    width: 100%;
    padding: 30px;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
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
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: #00007c;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    span {
        width: 40px;
        text-align: center;
    }
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
