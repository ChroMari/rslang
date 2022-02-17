import {configureStore} from '@reduxjs/toolkit';
import chooseDifficultyLevelReducer from '../redux/slices/sprintSlices/DifficultyLevelSlice';
import addSprintWordsReducer from '../redux/slices/sprintSlices/SprintSlice'
import addCurrentSprintWordReducer from '../redux/slices/sprintSlices/CurrentSprintWordSlice';
import addSprintRightAnswersReducer from '../redux/slices/sprintSlices/SprintRightAnswersSlice';
import addSprintWrongAnswersReducer from '../redux/slices/sprintSlices/SprintWrongAnswersSlice';
import currentSprintWordTranslateReducer from '../redux/slices/sprintSlices/CurrentSprintTranslateSlice'
import toggleTimeReducer from '../redux/slices/sprintSlices/TimerSlice';
import currentSprintScoreReducer from '../redux/slices/sprintSlices/SprintScoreSlice';
import currentSprintScoreStreakReducer from '../redux/slices/sprintSlices/CurrentSprintScoreStreakSlice'
import { StoreType } from '../redux/store';
export const store = configureStore({
    reducer: {
        chooseDifficultyLevel: chooseDifficultyLevelReducer,
        addSprintWords: addSprintWordsReducer,
        removeSprintWords: addSprintWordsReducer,
        addCurrentSprintWord: addCurrentSprintWordReducer,
        removeCurrentSprintWord: addCurrentSprintWordReducer,
        addSprintRightAnswers: addSprintRightAnswersReducer,
        removeSprintRightAnswers: addSprintRightAnswersReducer,
        addSprintWrongAnswers: addSprintWrongAnswersReducer,
        removeSprintWrongAnswers: addSprintWrongAnswersReducer,
        toggleTime: toggleTimeReducer,
        addCurrentSprintWordTranslate: currentSprintWordTranslateReducer,
        addCurrentSprintScore: currentSprintScoreReducer,
        addCurrentSprintScoreStreak: currentSprintScoreStreakReducer,
    }
})
export type RootStore = ReturnType<typeof store.getState>
