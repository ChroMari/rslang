import {createSlice} from '@reduxjs/toolkit';

const TimerSlice = createSlice({
    name: 'currentSprintWord',
    initialState: {
        currentTime: 60
    },
    reducers: {
        toggleTime(state, action) {
            return {
                ...state,
                currentTime: action.payload,
            }
        }
    }
})

export const {toggleTime} = TimerSlice.actions

export default TimerSlice.reducer
