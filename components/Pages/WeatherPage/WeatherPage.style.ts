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

export const StyledCurrentWeather = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledWeatherInfo = styled.div`
    height: 94.3%;
    width: 100%;
`;

export const StyledWeatherDay = styled.div`
    height: 98%;
    width: 70%;
    border: 2px solid #fff;
    border-radius: 8px;
    position: relative;
    top: 1%;
    left: 0.5%;
`;

export const StyledWeatherMain = styled.div`
    position: relative;
    padding: 20px;
    width: 70%;
    height: 300px;
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
        display: flex;
        gap: 70px;
        align-items: center;
        justify-content: center;
        p:first-child {
            font-size: 60px;
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
            }
        }
    }
`;

export const StyledWeatherAstro = styled.div`
    padding: 10px;
    width: 30%;
    height: 300px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 16px;
`;

export const StyledWeatherDetailed = styled.div`
    padding: 30px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
`;

export const StyledWeatherHours = styled.div`
    position: absolute;
    width: 96%;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: 220px;
    overflow-y: hidden;
    overflow-x: auto;
    box-sizing: border-box;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
        height: 10px;
    }
    &::-webkit-scrollbar-track {
        background: #0000e9;
        border-radius: 8px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #00007c;
        border-radius: 8px;
    }
`;

export const StyledWeatherHoursCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
    padding: 10px;
    width: 200px;
    height: 200px;
    border-radius: 7px;
    border: 2px solid #fff;
`;
