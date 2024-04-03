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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 90%;
    width: 100%;
    padding: 10px;
    display: flex;
    gap: 10px;
`;

export const StyledWeatherMain = styled.div`
    padding: 10px;
    width: 280px;
    height: 300px;
    font-size: 24px;

    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    border: 2px solid #fff;
    border-radius: 7px;
`;

export const StyledWeatherDetailed = styled.div`
    padding: 10px;
    width: 200px;
    height: 300px;
    border: 2px solid #fff;
    border-radius: 7px;
`;

export const StyledWeatherForecast = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 200px;
`;

export const StyledWeatherForecastCard = styled.div`
    padding: 10px;
    width: 300px;
    gap: 10px;
    border-radius: 7px;
    border: 2px solid #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;
