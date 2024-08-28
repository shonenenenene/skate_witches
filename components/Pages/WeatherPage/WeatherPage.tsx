import { useEffect, useState } from 'react';
import { Status } from '@/utils/types';
import { StyledLoader } from '@/ui/Loader';
import {
    StyledWeatherMain,
    StyledWeatherForm,
    StyledWeatherInfo,
    StyledWeatherAstro,
    StyledCurrentWeather,
    StyledWeatherDay,
    StyledWeatherDetailed,
    StyledWeatherDetailedButton,
} from './WeatherPage.style';
import { SwitchPageAnimationProvider } from '@/ui/SwitchPageAnimation';
import { WeatherApiData } from './types';
import Image from 'next/image';
import WeatherHours from './WeatherHours/WeatherHours';
import { useAppDispatch } from '@/redux/hooks';
import { setCurrentTime } from '@/redux/slices/WeatherPageSlices/weatherTimeSlice';

const Weather = () => {
    const WEATHER_KEY = process.env.NEXT_PUBLIC_WEATHER_KEY;

    const [status, setStatus] = useState<Status>('idle');

    const [citySearch, setCitySearch] = useState<string>('Saint Petersburg');

    const [weatherRes, setWeatherRes] = useState<WeatherApiData | null>(null);

    const [isShowAstro, setIsShowAstro] = useState(false);

    const dispatch = useAppDispatch();

    useEffect(() => {
        fetchRequest();
    }, []);

    async function fetchRequest() {
        setStatus('loading');
        try {
            const forecastData = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_KEY}&q=${citySearch}&days=3`);

            const forecastResult = await forecastData.json();

            if (forecastResult.hasOwnProperty('error')) {
                setStatus('error');
            } else {
                setWeatherRes(forecastResult);
                setStatus('success');
            }
        } catch {
            setStatus('error');
        }
    }

    weatherRes && dispatch(setCurrentTime(weatherRes.location.localtime.split(' ')[1]));

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
                                    <p>
                                        {weatherRes?.current.temp_c}℃<span>avg: {weatherRes?.forecast.forecastday[0].day.avgtemp_c}</span>
                                    </p>
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
                            <StyledWeatherDetailed>
                                <div>avg humidity: {weatherRes?.forecast.forecastday[0].day.avghumidity}%</div>
                                <div>chance of rain: {weatherRes?.forecast.forecastday[0].day.daily_chance_of_rain}%</div>
                                <div>chance of snow: {weatherRes?.forecast.forecastday[0].day.daily_chance_of_snow}%</div>
                                <div>max wind: {weatherRes?.forecast.forecastday[0].day.maxwind_kph}</div>
                                <div>uv: {weatherRes?.forecast.forecastday[0].day.uv}</div>
                                <StyledWeatherDetailedButton onClick={() => setIsShowAstro((state) => !state)}>
                                    {isShowAstro ? 'hide astronomy' : 'show astronomy'}
                                </StyledWeatherDetailedButton>
                                {isShowAstro && (
                                    <StyledWeatherAstro>
                                        <div>sunrise: {weatherRes?.forecast.forecastday[0].astro.sunrise}</div>
                                        <div>sunset: {weatherRes?.forecast.forecastday[0].astro.sunset}</div>
                                        <div>moonrise: {weatherRes?.forecast.forecastday[0].astro.moonrise}</div>
                                        <div>moonset: {weatherRes?.forecast.forecastday[0].astro.moonset}</div>
                                        <div>moon phase: {weatherRes?.forecast.forecastday[0].astro.moon_phase}</div>
                                        <div>moon illumination: {weatherRes?.forecast.forecastday[0].astro.moon_illumination}</div>
                                    </StyledWeatherAstro>
                                )}
                            </StyledWeatherDetailed>
                        </StyledCurrentWeather>

                        {weatherRes && <WeatherHours hourWeatherRes={weatherRes?.forecast.forecastday[0].hour} />}
                    </StyledWeatherDay>
                </StyledWeatherInfo>
            ) : status === 'loading' ? (
                <StyledLoader />
            ) : status === 'error' ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '50px', margin: '20px' }}>
                    sorry, but something went wrong...
                    <div style={{ fontStyle: 'italic' }}>
                        On a withered branch
                        <br />
                        A crow has alighted;
                        <br />
                        Nightfall in autumn.
                    </div>
                </div>
            ) : null}
        </SwitchPageAnimationProvider>
    );
};

export default Weather;
