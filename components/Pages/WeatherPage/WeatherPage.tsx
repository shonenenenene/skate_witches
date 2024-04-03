import { useEffect, useState } from 'react';
import { Status } from '@/utils/types';
import { StyledLoader } from '@/ui/Loader';
import {
    StyledWeatherMain,
    StyledWeatherForm,
    StyledWeatherInfo,
    StyledWeatherDetailed,
    StyledWeatherForecast,
    StyledWeatherForecastCard,
    StyledCurrentWeather,
} from './WeatherPage.style';
import { SwitchPageAnimationProvider } from '@/ui/SwitchPageAnimation';
import { WeatherApiData } from './types';

const Weather = () => {
    const WEATHER_KEY = process.env.NEXT_PUBLIC_WEATHER_KEY;

    const [status, setStatus] = useState<Status>('idle');

    const [errorMessage, setErrorMessage] = useState('');

    const [citySearch, setCitySearch] = useState<string>('Saint Petersburg');

    const [weatherRes, setWeatherRes] = useState<WeatherApiData | null>(null);

    useEffect(() => {
        fetchRequest();
    }, []);

    async function fetchRequest() {
        setStatus('loading');
        try {
            const forecastData = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_KEY}&q=${citySearch}&days=3`);

            const forecastResult = await forecastData.json();

            console.log(forecastResult);

            if (forecastResult.hasOwnProperty('error')) {
                setStatus('error');
                setErrorMessage('oh, some errors on server');
            } else {
                setWeatherRes(forecastResult);
                setStatus('success');
            }
        } catch {
            setStatus('error');
        }
    }

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!!citySearch) {
            fetchRequest();
        }
    };

    return (
        <SwitchPageAnimationProvider>
            <StyledWeatherForm onSubmit={(e) => submitForm(e)}>
                <input
                    placeholder='enter the name of the city?'
                    type='text'
                    value={citySearch}
                    onChange={(e) => setCitySearch(e.target.value)}
                />
                <button type='submit'>🔍</button>
            </StyledWeatherForm>
            {status === 'success' ? (
                <StyledWeatherInfo>
                    <StyledCurrentWeather>
                        <StyledWeatherMain>
                            <div>
                                {weatherRes?.location.name}, {weatherRes?.location.country}
                            </div>
                            <div>{weatherRes?.current.temp_c} ℃</div>
                            <img src={weatherRes?.current.condition.icon} />
                            <div>{weatherRes?.location.localtime}</div>
                        </StyledWeatherMain>
                        <StyledWeatherDetailed>
                            <div>sunrise: {weatherRes?.forecast.forecastday[0].astro.sunrise}</div>
                            <div>sunset: {weatherRes?.forecast.forecastday[0].astro.sunset}</div>
                            <div>moonrise: {weatherRes?.forecast.forecastday[0].astro.moonrise}</div>
                            <div>moonset: {weatherRes?.forecast.forecastday[0].astro.moonset}</div>
                            <div>moon phase: {weatherRes?.forecast.forecastday[0].astro.moon_phase}</div>
                            <div>moon illumination: {weatherRes?.forecast.forecastday[0].astro.moon_illumination}</div>
                        </StyledWeatherDetailed>
                    </StyledCurrentWeather>

                    <StyledWeatherForecast>
                        {weatherRes?.forecast.forecastday.slice(1).map((e) => {
                            return (
                                <StyledWeatherForecastCard key={e.date}>
                                    <div>date: {e.date}</div>
                                    <div>average temperature: {e.day.avgtemp_c} ℃</div>
                                    <img src={e.day.condition.icon} alt={e.day.condition.text} />
                                    <div>{e.day.condition.text}</div>
                                </StyledWeatherForecastCard>
                            );
                        })}
                    </StyledWeatherForecast>
                </StyledWeatherInfo>
            ) : status === 'loading' ? (
                <StyledLoader />
            ) : status === 'error' ? (
                <div>{errorMessage}</div>
            ) : null}
        </SwitchPageAnimationProvider>
    );
};

export default Weather;
