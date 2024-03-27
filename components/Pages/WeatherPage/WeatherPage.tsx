import { useEffect, useState } from 'react';
import { Status } from '@/utils/types';
import { StyledLoader } from '@/ui/Loader';
import { StyledWeatherMain, StyledWeatherForm, StyledWeatherInfo, StyledWeatherDetailed } from './WeatherPage.style';
import { SwitchPageAnimationProvider } from '@/ui/SwitchPageAnimation';
import { CityAstronomy, CityWeather } from './types';

const Weather = () => {
    const WEATHER_KEY = process.env.NEXT_PUBLIC_WEATHER_KEY;

    const [status, setStatus] = useState<Status>('idle');

    const [errorMessage, setErrorMessage] = useState('');

    const [citySearch, setCitySearch] = useState<string>('Saint Petersburg');

    const [mainRes, setMainRes] = useState<CityWeather | null>(null);
    const [astroRes, setAstroRes] = useState<CityAstronomy | null>(null);

    useEffect(() => {
        fetchRequest();
    }, []);

    async function fetchRequest() {
        setStatus('loading');
        try {
            const mainData = await fetch(`https://api.weatherapi.com/v1/current.json?key=${WEATHER_KEY}&q=${citySearch}`);
            const astronomyData = await fetch(`https://api.weatherapi.com/v1/astronomy.json?key=${WEATHER_KEY}&q=${citySearch}`);
            const mainResult = await mainData.json();
            const astronomyResult = await astronomyData.json();
            if (mainResult.hasOwnProperty('error') && astronomyResult.hasOwnProperty('error')) {
                setStatus('error');
                setErrorMessage('oh, some errors on server');
            } else {
                setMainRes(mainResult);
                setAstroRes(astronomyResult.astronomy.astro);
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
                    <StyledWeatherMain>
                        <div>
                            {mainRes?.location.name}, {mainRes?.location.country}
                        </div>
                        <div>{mainRes?.current.temp_c} ℃</div>
                        <img src={mainRes?.current.condition.icon} />
                        <div>{mainRes?.location.localtime}</div>
                    </StyledWeatherMain>
                    <StyledWeatherDetailed>
                        <div>sunrise: {astroRes?.sunrise}</div>
                        <div>sunset: {astroRes?.sunset}</div>
                        <div>moonrise: {astroRes?.moonrise}</div>
                        <div>moonset: {astroRes?.moonset}</div>
                        <div>moon_phase: {astroRes?.moon_phase}</div>
                        <div>moon_illumination: {astroRes?.moon_illumination}</div>
                    </StyledWeatherDetailed>
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
