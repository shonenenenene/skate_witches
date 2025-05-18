import { css, styled } from 'styled-components';

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

export const StyledCurrentWeather = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: start;
    height: 50%;

    @media (max-width: 770px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: auto;
        margin-bottom: 20px;
    }
`;

export const StyledWeatherInfo = styled.div`
    height: 94.3%;
    width: 100%;
    @media (max-width: 770px) {
        height: auto;
    }
`;

export const StyledWeatherDay = styled.div`
    height: 98%;
    width: 99%;
    border: 2px solid #fff;
    border-radius: 8px;
    position: relative;
    top: 1%;
    left: 0.5%;
    box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 1) inset;
`;

export const StyledWeatherMain = styled.div`
    position: relative;
    padding: 20px;
    width: 70%;
    /* height: 360px; */
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 60px;
    h3 {
        position: relative;
        font-size: 34px;
        p {
            position: absolute;
            font-size: 16px;
        }
    }
    div {
        margin-left: 30px;
        display: flex;
        gap: 70px;
        align-items: center;
        justify-content: center;

        p:first-child {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-shrink: 0;
            height: 130px;
            width: 180px;
            border-radius: 20%;
            font-size: 50px;
            box-shadow: 0px 0px 94px -36px rgba(255, 255, 255, 1) inset;
            span {
                position: absolute;
                font-size: 12px;
                bottom: -16px;
            }
        }
        div {
            display: flex;
            gap: 10px;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            p {
                position: relative;
                top: -20px;
                font-size: 20px;
            }
        }
        @media (max-width: 539px) {
            flex-direction: column;
        }
    }
`;

export const StyledWeatherAstro = styled.div`
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 16px;
    animation: slide 0.1s ease 0.1s 1 normal both;
    @keyframes slide {
        0% {
            transform: scaleY(0) translateY(-90%);
        }
        100% {
            transform: scaleY(1) translateY(0);
        }
    }
`;

export const StyledWeatherDetailed = styled.div`
    padding: 10px;
    width: 30%;
    max-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 4px;
    font-size: 18px;
    box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 1) inset;
    @media (max-width: 770px) {
        width: 100%;
    }
`;

export const StyledWeatherDetailedButton = styled.button`
    width: 100%;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.3);
    font-size: 16px;
    height: 30px;
    flex-shrink: 0;
    transition: 0.2s;
    &:hover {
        background-color: rgba(255, 255, 255, 0.4);
    }
    @media (max-width: 770px) {
        width: 100%;
    }
`;

export const StyledWeatherHours = styled.div`
    padding: 0 10px;
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 10px;
    height: 50%;
    overflow-y: hidden;
    overflow-x: auto;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
        height: 10px;
        pointer-events: none;
    }
    &::-webkit-scrollbar-track {
        background: #0000e9;
        border-radius: 8px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #00007c;
        border-radius: 8px;
    }
    @media (max-width: 770px) {
        position: relative;
        &::-webkit-scrollbar {
            display: none;
        }
        border-radius: 8px;
    }
`;

export const StyledWeatherHoursCard = styled.div<{ iscurrenttime: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    flex-shrink: 0;
    gap: 10px;
    padding: 10px;
    width: 140px;
    height: 100%;
    border-radius: 8px;
    box-shadow:
        rgba(255, 255, 255, 0.17) 0px -23px 25px 0px inset,
        rgba(255, 255, 255, 0.15) 0px -36px 30px 0px inset,
        rgba(255, 255, 255, 0.1) 0px -79px 40px 0px inset,
        rgba(255, 255, 255, 0.06) 0px 2px 1px,
        rgba(255, 255, 255, 0.09) 0px 4px 2px;

    h6 {
        font-size: 16px;
        border-radius: 8px;
        box-shadow:
            rgba(255, 255, 255, 0.4) 0px 2px 4px,
            rgba(255, 255, 255, 0.3) 0px 7px 13px -3px,
            rgba(255, 255, 255, 0.2) 0px -3px 0px inset;
        padding: 2px 6px;
    }

    p {
        position: relative;
        top: -8px;
        font-size: 13px;
        text-align: center;
    }
    ${({ iscurrenttime }) => css`
        border: ${iscurrenttime === true ? '3px solid #ff00ff' : '1px solid #fff'};
        height: ${iscurrenttime === true ? '98%' : '90%'};
        h6 {
            font-size: ${iscurrenttime === true ? '20px' : '16px'};
        }
    `}
`;
