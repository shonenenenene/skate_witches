import { StyledWeatherHoursCard } from '../WeatherPage.style';
import Image from 'next/image';
import { WeatherHoursCardProps } from '../types';
import { useAppSelector } from '@/redux/hooks';

const WeatherHoursCard = ({ hourWeatherCardData }: WeatherHoursCardProps) => {
    const cardTime = hourWeatherCardData.time.split(' ')[1];

    const currentTime = useAppSelector((state) => state.time.value);

    const isCurrentTime = currentTime.split(':')[0] === cardTime.split(':')[0];

    return (
        <StyledWeatherHoursCard iscurrenttime={isCurrentTime}>
            <h6>{cardTime}</h6>
            <div>{hourWeatherCardData.temp_c}℃</div>
            <div>{hourWeatherCardData.wind_dir}</div>
            <div>{hourWeatherCardData.wind_kph} km/h</div>
            <Image src={hourWeatherCardData.condition.icon} alt={hourWeatherCardData.condition.text} width={80} height={80} />
            <p>{hourWeatherCardData.condition.text}</p>
        </StyledWeatherHoursCard>
    );
};

export default WeatherHoursCard;
