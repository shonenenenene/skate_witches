import { StyledWeatherHours } from '../WeatherPage.style';
import { WeatherHoursProps } from '../types';

import WeatherHoursCard from './WeatherHoursCard';

const WeatherHours = ({ hourWeatherRes }: WeatherHoursProps) => {
    return (
        <StyledWeatherHours>
            {hourWeatherRes.map((e, i) => {
                return <WeatherHoursCard key={i} hourWeatherCardData={e} />;
            })}
        </StyledWeatherHours>
    );
};

export default WeatherHours;
