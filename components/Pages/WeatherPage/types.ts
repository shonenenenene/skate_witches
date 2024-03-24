export interface CityWeather {
    location: {
        name: string;
        country: string;
    };
    current: {
        temp_c: string;
        condition: {
            icon: string;
            text: string;
        };
    };
}
