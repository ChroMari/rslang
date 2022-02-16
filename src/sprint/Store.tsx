import {configureStore} from '@reduxjs/toolkit';
import chooseDifficultyLevelReducer from './DifficultyLevelSlice';
import addSprintWordsReducer from './SprintSlice'
import addCurrentSprintWordReducer from './CurrentSprintWordSlice';
import addSprintRightAnswersReducer from './SprintRightAnswersSlice';
import addSprintWrongAnswersReducer from './SprintWrongAnswersSlice';
export const store = configureStore({
    reducer: {
        chooseDifficultyLevel: chooseDifficultyLevelReducer,
        addSprintWords: addSprintWordsReducer,
        addCurrentSprintWord: addCurrentSprintWordReducer,
        addSprintRightAnswers: addSprintRightAnswersReducer,
        addSprintWrongAnswers: addSprintWrongAnswersReducer,
    }
})
export type RootStore = ReturnType<typeof store.getState>
