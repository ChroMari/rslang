import {configureStore} from '@reduxjs/toolkit';
import chooseDifficultyLevelReducer from './DifficultyLevelSlice';
import addSprintWordsReducer from './SprintSlice'
import addCurrentSprintWordReducer from './CurrentSprintWordSlice';
export const store = configureStore({
    reducer: {
        chooseDifficultyLevel: chooseDifficultyLevelReducer,
        addSprintWords: addSprintWordsReducer,
        addCurrentSprintWord: addCurrentSprintWordReducer,
    }
})
export type RootStore = ReturnType<typeof store.getState>
