import { StyledWeatherHoursCard } from '../WeatherPage.style';
import Image from 'next/image';
import { WeatherHoursCardProps } from '../types';

const WeatherHoursCard = ({ hourWeatherCardData }: WeatherHoursCardProps) => {
    return (
        <StyledWeatherHoursCard>
            <h6>{hourWeatherCardData.time.split(' ')[1]}</h6>
            <div>{hourWeatherCardData.temp_c}℃</div>
            <div>{hourWeatherCardData.wind_dir}</div>
            <div>{hourWeatherCardData.wind_kph} km/h</div>
            <Image src={hourWeatherCardData.condition.icon} alt={hourWeatherCardData.condition.text} width={80} height={80} />
            <p>{hourWeatherCardData.condition.text}</p>
        </StyledWeatherHoursCard>
    );
};

export default WeatherHoursCard;
