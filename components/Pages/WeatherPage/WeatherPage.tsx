import { useEffect, useState } from 'react';
import { Status } from '@/utils/types';
import { StyledLoader } from '@/ui/Loader';
import {
    StyledWeatherMain,
    StyledWeatherForm,
    StyledWeatherInfo,
    StyledWeatherAstro,
    StyledWeatherHours,
    StyledWeatherHoursCard,
    StyledCurrentWeather,
    StyledWeatherDay,
    StyledWeatherDetailed,
} from './WeatherPage.style';
import { SwitchPageAnimationProvider } from '@/ui/SwitchPageAnimation';
import { WeatherApiData } from './types';
import Image from 'next/image';

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
                    placeholder='enter the name of the city'
                    type='text'
                    value={citySearch}
                    onChange={(e) => setCitySearch(e.target.value)}
                />
                <button type='submit'>🔍</button>
            </StyledWeatherForm>
            {status === 'success' ? (
                <StyledWeatherInfo>
                    <StyledWeatherDay>
                        <StyledCurrentWeather>
                            <StyledWeatherMain>
                                <h3>
                                    today's {weatherRes?.location.name}, {weatherRes?.location.country}
                                    <p>{weatherRes?.location.localtime}</p>
                                </h3>
                                <div>
                                    <p>{weatherRes?.current.temp_c}℃</p>
                                    <div>
                                        <Image
                                            src={weatherRes?.current.condition.icon ?? ''}
                                            alt={weatherRes?.current.condition.text ?? ''}
                                            width={120}
                                            height={120}
                                        />
                                        <p>{weatherRes?.current.condition.text}</p>
                                    </div>
                                </div>
                            </StyledWeatherMain>
                            <StyledWeatherAstro>
                                <div>sunrise: {weatherRes?.forecast.forecastday[0].astro.sunrise}</div>
                                <div>sunset: {weatherRes?.forecast.forecastday[0].astro.sunset}</div>
                                <div>moonrise: {weatherRes?.forecast.forecastday[0].astro.moonrise}</div>
                                <div>moonset: {weatherRes?.forecast.forecastday[0].astro.moonset}</div>
                                <div>moon phase: {weatherRes?.forecast.forecastday[0].astro.moon_phase}</div>
                                <div>moon illumination: {weatherRes?.forecast.forecastday[0].astro.moon_illumination}</div>
                            </StyledWeatherAstro>
                        </StyledCurrentWeather>
                        <StyledWeatherDetailed>
                            <div>
                                <div>average temperature: {weatherRes?.forecast.forecastday[0].day.avgtemp_c}</div>
                                <div>average humidity: {weatherRes?.forecast.forecastday[0].day.avghumidity}</div>
                            </div>
                            <div>
                                <div>chance of rain: {weatherRes?.forecast.forecastday[0].day.daily_chance_of_rain}</div>
                                <div>chance of snow: {weatherRes?.forecast.forecastday[0].day.daily_chance_of_snow}</div>
                            </div>
                            <div>
                                <div>max wind: {weatherRes?.forecast.forecastday[0].day.maxwind_kph}</div>
                                <div>uv: {weatherRes?.forecast.forecastday[0].day.uv}</div>
                            </div>
                        </StyledWeatherDetailed>

                        <StyledWeatherHours>
                            {weatherRes?.forecast.forecastday[0].hour.map((e, i) => {
                                return (
                                    <StyledWeatherHoursCard key={i}>
                                        <div>{i}</div>
                                        <div>{e.temp_c}℃</div>
                                        <div>{e.wind_dir}</div>
                                        <div>{e.wind_kph}</div>
                                        <Image src={e.condition.icon} alt={e.condition.text} width={100} height={100} />
                                        <div>{e.condition.text}</div>
                                    </StyledWeatherHoursCard>
                                );
                            })}
                        </StyledWeatherHours>
                    </StyledWeatherDay>
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
