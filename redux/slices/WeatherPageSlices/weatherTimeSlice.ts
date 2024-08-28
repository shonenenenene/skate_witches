import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

// Define a type for the slice state
export interface TimeState {
    value: string;
}

// Define the initial state using that type
const initialState: TimeState = {
    value: 'idle',
};

export const timeSlice = createSlice({
    name: 'time',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setCurrentTime: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    },
});

export const { setCurrentTime } = timeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTime = (state: RootState) => state.time.value;

export default timeSlice.reducer;
