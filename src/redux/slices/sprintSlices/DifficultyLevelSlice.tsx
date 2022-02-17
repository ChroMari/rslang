import {createSlice} from '@reduxjs/toolkit';

const difficultyLevelSlice = createSlice({
    name: 'difficultyLevel',
    initialState: {
        difficultyLevel: ''
    },
    reducers: {
        chooseDifficultyLevel(state, action) {
            return {
                ...state,
                difficultyLevel: action.payload,
            }
        }
    }
})

export const {chooseDifficultyLevel} = difficultyLevelSlice.actions

export default difficultyLevelSlice.reducer
