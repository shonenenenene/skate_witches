import { styled } from 'styled-components';

export const StyledWeatherForm = styled.form`
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

export const StyledWeatherResult = styled.div`
    flex-direction: column;
    gap: 10px;
    height: 90%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
