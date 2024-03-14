import { useEffect, useState } from 'react';
import { Status } from '@/utils/types';
import { StyledLoader } from '@/ui/Loader';
import { StyledWeatherForm, StyledWeatherResult } from './WeatherPage.style';
import { SwitchPageAnimationProvider } from '@/ui/SwitchPageAnimation';
import { CityWeather } from './types';

const Weather = () => {
    const [status, setStatus] = useState<Status>('idle');

    const [errorMessage, setErrorMessage] = useState('');

    const [citySearch, setCitySearch] = useState<string>('Saint Petersburg');

    const [res, setRes] = useState<CityWeather | null>(null);

    useEffect(() => {
        fetchRequest();
    }, []);

    async function fetchRequest() {
        setStatus('loading');
        try {
            const data = await fetch(`https://api.weatherapi.com/v1/current.json?key=f1c127391a9a4c53902145543240903&q=${citySearch}`);
            const result = await data.json();
            if (result.hasOwnProperty('error')) {
                setStatus('error');
                setErrorMessage(result.error.message);
            } else {
                setRes(result);
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
            {status === 'success' && res !== null ? (
                <StyledWeatherResult>
                    {res.location.name}
                    <div>{res.current.temp_c} ℃</div>
                    <img src={res.current.condition.icon} />
                </StyledWeatherResult>
            ) : status === 'loading' ? (
                <StyledLoader />
            ) : status === 'error' ? (
                <div>{errorMessage}</div>
            ) : null}
        </SwitchPageAnimationProvider>
    );
};

export default Weather;
