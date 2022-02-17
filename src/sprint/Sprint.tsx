import { URL_API_WORDS } from '../constants/Url';
import { useDispatch, useSelector } from 'react-redux';
import {chooseDifficultyLevel} from '../redux/slices/sprintSlices/DifficultyLevelSlice';
import { text } from 'stream/consumers';
import { useEffect, useState } from 'react';
import { addSprintWords } from '../redux/slices/sprintSlices/SprintSlice';
import { addCurrentSprintWord } from '../redux/slices/sprintSlices/CurrentSprintWordSlice';
import './Sprint.scss'
import { addSprintRightAnswers } from '../redux/slices/sprintSlices/SprintRightAnswersSlice';
import { addSprintWrongAnswers } from '../redux/slices/sprintSlices/SprintWrongAnswersSlice';
import { Timer } from './Timer';
import { addCurrentSprintWordTranslate } from '../redux/slices/sprintSlices/CurrentSprintTranslateSlice';
import { addCurrentSprintScore } from '../redux/slices/sprintSlices/SprintScoreSlice';
import { addCurrentSprintScoreStreak } from '../redux/slices/sprintSlices/CurrentSprintScoreStreakSlice';
import { toggleTime } from '../redux/slices/sprintSlices/TimerSlice';
import { StoreType } from '../redux/store';

export const Sprint = () => {
  const wordsArray = useSelector((state: StoreType) => state.addSprintWords.sprintWords)
  const difficultyLevel = useSelector((state: StoreType) => state.chooseDifficultyLevel.difficultyLevel)
  const currentSprintWord = useSelector((state:StoreType) => state.addCurrentSprintWord.currentSprintWord)
  const currentSprintWordTranslate = useSelector((state:StoreType) => state.addCurrentSprintWordTranslate.currentSprintWordTranslate)
  const rightAnswers = useSelector((state:StoreType) => state.addSprintRightAnswers.sprintRightAnswers)
  const wrongAnswers = useSelector((state:StoreType) => state.addSprintWrongAnswers.sprintWrongAnswers)
  const sprintScore = useSelector((state:StoreType) => state.addCurrentSprintScore.currentSprintScore)
  const sprintScoreStreak = useSelector((state:StoreType) => state.addCurrentSprintScoreStreak.currentSprintScoreStreak)


  const dispatch = useDispatch()

  const [correctAnswerFlag, setCorrectAnswerFlag] = useState(false)

  const getRandomWord = () => {
    return wordsArray[Math.floor(Math.random() * 30)][Math.floor(Math.random() * 20)]
  }

  const addRandomWordToCurrent = (word: any) => {
    dispatch(addCurrentSprintWordTranslate(word))
    return (dispatch(addCurrentSprintWord(word)))
  }

  const [currentRandomTranslate, setCurrentRandomTranslate] = useState('')

  useEffect(() => {
    setCurrentRandomTranslate(generateAnswer())
  }, [currentSprintWord])

  const generateAnswer = () => {
    if (Math.random() > 0.5) {
      setCorrectAnswerFlag(true)
      return currentSprintWordTranslate
    } else {
      setCorrectAnswerFlag(false)
      // @ts-ignore
      return getRandomWord().wordTranslate
    }
  }


  const onclickHandlerCorrectAnswer = () => {
    if (correctAnswerFlag === true) {
      dispatch(addCurrentSprintScoreStreak(sprintScoreStreak === 30 ? sprintScoreStreak : sprintScoreStreak + 10))
      dispatch(addCurrentSprintScore(sprintScore + 10 + sprintScoreStreak))
      dispatch(addSprintRightAnswers(currentSprintWord))
      addRandomWordToCurrent(getRandomWord())
      generateAnswer()
    } else {
      dispatch(addCurrentSprintScoreStreak(0))
      dispatch(addSprintWrongAnswers(currentSprintWord))
      addRandomWordToCurrent(getRandomWord())
      generateAnswer()
    }
  }

  const onclickHandlerIncorrectAnswer = () => {
    if (correctAnswerFlag === false) {
      dispatch(addCurrentSprintScoreStreak(sprintScoreStreak === 30 ? sprintScoreStreak : sprintScoreStreak + 10))
      dispatch(addCurrentSprintScore(sprintScore + 10 + sprintScoreStreak))
      dispatch(addSprintRightAnswers(currentSprintWord))
      addRandomWordToCurrent(getRandomWord())
      generateAnswer()
    } else {
      dispatch(addCurrentSprintScoreStreak(0))
      dispatch(addSprintWrongAnswers(currentSprintWord))
      addRandomWordToCurrent(getRandomWord())
      generateAnswer()
    }
  }

  const audioHandler = () => {
    // @ts-ignore
    const audio = new Audio(`https://rslanglearnwords.herokuapp.com/` + currentSprintWord.audio)
    audio.play()
  }

  //{currentTime === 0 ? <SprintResults/> : (wordsArray.length !== 30 ? <DifficultyLevel /> : <Sprint />)} - Условие для запуска


  return (
      <div className={'sprint-round-container'}>
        <div className='round-info-top-string'>
          <div className={'round-score'}>{sprintScore}</div>
          <div className={'round-timer-container'}>
            <Timer/>
          </div>
          <button className={'audio-button'} onClick={audioHandler}></button>
        </div>
        <div className={'correct-answer-streak-container'}>
          <div className={'correct__answer__streak__item'} style={{background: `${sprintScoreStreak >= 10 ? '#79E196' : '#4F4F4F'}`}}></div>
          <div className={'correct__answer__streak__item'} style={{background: `${sprintScoreStreak >= 20 ? '#79E196' : '#4F4F4F'}`}}></div>
          <div className={'correct__answer__streak__item'} style={{background: `${sprintScoreStreak === 30 ? '#79E196' : '#4F4F4F'}`}}></div>
        </div>
        <div className='round-info-middle-string'>
          <div className={'current-word'}>{currentSprintWord.word === 'test' ? addRandomWordToCurrent(getRandomWord()) : currentSprintWord.word}</div>
          <div className={'current-word-translate'}>{currentRandomTranslate}</div>
        </div>
        <div className='answer-button-container'>
          <button className='incorrect-answer' onClick={onclickHandlerIncorrectAnswer}>Не верно</button>
          <button className='correct-answer' onClick={onclickHandlerCorrectAnswer}>Верно</button>
        </div>
      </div>
  )
}
