import {configureStore} from '@reduxjs/toolkit';
import chooseDifficultyLevelReducer from './DifficultyLevelSlice';
import addSprintWordsReducer from './SprintSlice'
export const store = configureStore({
    reducer: {
        chooseDifficultyLevel: chooseDifficultyLevelReducer,
        addSprintWords: addSprintWordsReducer
    }
})
export type RootStore = ReturnType<typeof store.getState>
