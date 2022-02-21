import {createSlice} from '@reduxjs/toolkit';

const CurrentSprintWordTranslateSlice = createSlice({
    name: 'currentSprintWordTranslate',
    initialState: {
        currentSprintWordTranslate: ''
    },
    reducers: {
        addCurrentSprintWordTranslate(state, action) {
            return {
                ...state,
                currentSprintWordTranslate: action.payload.wordTranslate,
            }
        }
    }
})

export const {addCurrentSprintWordTranslate} = CurrentSprintWordTranslateSlice.actions

export default CurrentSprintWordTranslateSlice.reducer
