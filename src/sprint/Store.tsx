import {configureStore} from '@reduxjs/toolkit';
import chooseDifficultyLevelReducer from './DifficultyLevelSlice';
import addSprintWordsReducer from './SprintSlice'
import addCurrentSprintWordReducer from './CurrentSprintWordSlice';
import addSprintRightAnswersReducer from './SprintRightAnswersSlice';
import addSprintWrongAnswersReducer from './SprintWrongAnswersSlice';
import currentSprintWordTranslateReducer from './CurrentSprintTranslateSlice'
import toggleTimeReducer from './TimerSlice';
import currentSprintScoreReducer from './SprintScoreSlice';
import currentSprintScoreStreakReducer from './CurrentSprintScoreStreakSlice'
export const store = configureStore({
    reducer: {
        chooseDifficultyLevel: chooseDifficultyLevelReducer,
        addSprintWords: addSprintWordsReducer,
        addCurrentSprintWord: addCurrentSprintWordReducer,
        addSprintRightAnswers: addSprintRightAnswersReducer,
        addSprintWrongAnswers: addSprintWrongAnswersReducer,
        toggleTime: toggleTimeReducer,
        addCurrentSprintWordTranslate: currentSprintWordTranslateReducer,
        addCurrentSprintScore: currentSprintScoreReducer,
        addCurrentSprintScoreStreak: currentSprintScoreStreakReducer,
    }
})
export type RootStore = ReturnType<typeof store.getState>
