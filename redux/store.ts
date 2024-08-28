import { configureStore } from '@reduxjs/toolkit';
import timeReducer from './slices/WeatherPageSlices/weatherTimeSlice';

export const makeStore = () => {
    return configureStore({
        reducer: {
            time: timeReducer,
        },
    });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
