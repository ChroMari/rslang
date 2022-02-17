import {configureStore} from "@reduxjs/toolkit";
import userReducer from '../slices/userSlice';
import bookReducer from "../slices/bookSlice";
import wordsReducer from "../slices/wordsSlice";
import chooseDifficultyLevelReducer from '../slices/sprintSlices/DifficultyLevelSlice';
import addSprintWordsReducer from '../slices/sprintSlices/SprintSlice';
import addCurrentSprintWordReducer from '../slices/sprintSlices/CurrentSprintWordSlice';
import addSprintRightAnswersReducer from '../slices/sprintSlices/SprintRightAnswersSlice';
import addSprintWrongAnswersReducer from '../slices/sprintSlices/SprintWrongAnswersSlice';
import toggleTimeReducer from '../slices/sprintSlices/TimerSlice';
import currentSprintWordTranslateReducer from '../slices/sprintSlices/CurrentSprintTranslateSlice';
import currentSprintScoreReducer from '../slices/sprintSlices/SprintScoreSlice';
import currentSprintScoreStreakReducer from '../slices/sprintSlices/CurrentSprintScoreStreakSlice';

const store = configureStore({
  reducer: {
    book: bookReducer,
    words: wordsReducer,
    user: userReducer,
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
});

export default store;

export type StoreType = ReturnType<typeof store.getState>;
