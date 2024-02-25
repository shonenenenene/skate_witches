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

export const StyledPicsPaginatorButton = styled.button`
    background-color: #ffffff1d;
    height: 40px;
    width: 40px;
    font-size: 20px;
    &:hover {
        background-color: #ffffff4c;
        transition: 0.3s;
    }
`;
