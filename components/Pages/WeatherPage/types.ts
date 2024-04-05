interface CurrentWeather {
    location: {
        name: string;
        country: string;
        localtime: string;
    };
    current: {
        temp_c: number;
        condition: {
            icon: string;
            text: string;
        };
    };
}

interface Astronomy {
    sunrise: string;
    sunset: string;
    moonrise: string;
    moonset: string;
    moon_phase: string;
    moon_illumination: string;
}

export interface WeatherApiData {
    current: CurrentWeather['current'];
    forecast: {
        forecastday: [
            {
                astro: Astronomy;
                date: string;
                day: {
                    avgtemp_c: number;
                    avghumidity: number;
                    condition: CurrentWeather['current']['condition'];
                    daily_chance_of_rain: number;
                    daily_chance_of_snow: number;
                    maxwind_kph: number;
                    uv: number;
                };
                hour: [
                    {
                        condition: CurrentWeather['current']['condition'];
                        temp_c: number;
                        wind_dir: string;
                        wind_kph: number;
                        time: string;
                    }
                ];
            }
        ];
    };
    location: CurrentWeather['location'];
}
