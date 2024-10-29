import { useAppSelector } from '@/redux/hooks';
import { StyledWeatherHours } from '../WeatherPage.style';
import { WeatherHoursProps } from '../types';

import WeatherHoursCard from './WeatherHoursCard';

const WeatherHours = ({ hourWeatherRes }: WeatherHoursProps) => {
    const currentTime = useAppSelector((state) => state.time.value).split(':')[0];

    return (
        <StyledWeatherHours>
            {hourWeatherRes
                .filter((el) => currentTime < el.time.split(' ')[1])
                .map((card) => {
                    return <WeatherHoursCard key={card.time} hourWeatherCardData={card} />;
                })}
        </StyledWeatherHours>
    );
};

export default WeatherHours;
