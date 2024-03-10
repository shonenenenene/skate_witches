import { useEffect, useState } from 'react';
import { Status } from '../PicsPage/types';
import { StyledLoader } from '@/ui/Loader';
import { StyledWeatherForm } from './WeatherPage.style';

const Weather = () => {
    const [status, setStatus] = useState<Status>('idle');

    const [citySearch, setCitySearch] = useState<string>('Saint Petersburg');

    const [res, setRes] = useState([]);

    useEffect(() => {
        fetchRequest();
    }, []);

    async function fetchRequest() {
        setStatus('loading');
        try {
            const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=f1c127391a9a4c53902145543240903&q=${citySearch}`);
            const result = await data.json();
            console.log(result);
            setRes(result);
            setStatus('success');
        } catch {
            console.log('damn');
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
        <>
            {' '}
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
                <div>
                    {res.location.name}
                    <div>{res.current.temp_c}</div>
                    <img src={res.current.condition.icon} />
                </div>
            ) : (
                <StyledLoader />
            )}
        </>
    );
};

export default Weather;
