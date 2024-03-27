export interface CityWeather {
    location: {
        name: string;
        country: string;
        localtime: string;
    };
    current: {
        temp_c: string;
        condition: {
            icon: string;
            text: string;
        };
    };
}

export interface CityAstronomy {
    sunrise: string;
    sunset: string;
    moonrise: string;
    moonset: string;
    moon_phase: string;
    moon_illumination: string;
}
