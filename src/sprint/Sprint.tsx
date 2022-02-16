import { URL_API_WORDS } from '../constants/Url';
import { useDispatch, useSelector } from 'react-redux';
import {chooseDifficultyLevel} from './DifficultyLevelSlice';
import { text } from 'stream/consumers';
import { useState } from 'react';
import { RootStore } from './Store';
import { addSprintWords } from './SprintSlice';
import { addCurrentSprintWord } from './CurrentSprintWordSlice';
import './Sprint.scss'
import { addSprintRightAnswers } from './SprintRightAnswersSlice';
import { addSprintWrongAnswers } from './SprintWrongAnswersSlice';
import { Timer } from './Timer';

export const Sprint = () => {
  const wordsArray = useSelector((state: RootStore) => state.addSprintWords.sprintWords)
  const difficultyLevel = useSelector((state: RootStore) => state.chooseDifficultyLevel.difficultyLevel)
  const currentSprintWord = useSelector((state:RootStore) => state.addCurrentSprintWord.currentSprintWord)
  const rightAnswers = useSelector((state:RootStore) => state.addSprintRightAnswers.sprintRightAnswers)
  const wrongAnswers = useSelector((state:RootStore) => state.addSprintWrongAnswers.sprintWrongAnswers)

  const dispatch = useDispatch()

  let correctAnswerFlag = false

  const fetchGetWords = (levelOfDifficulty: string, page: number) => {
    fetch(`${URL_API_WORDS}/?group=${levelOfDifficulty}&page=${page}`, {
      method: 'GET',
    })
        .then((res) => res.json())
        .then((result) => {
          dispatch(addSprintWords(result))
        })
        .catch((err) => console.log('error'))
  }

  const getChunkOfWords = () => {
    let levelOfDifficulty = '1'
    for (let i = 0; i < 30; i++) {
      fetchGetWords(levelOfDifficulty, i)
    }
  }

  const getRandomWord = () => {
    return wordsArray == null || undefined
        ? null
        : wordsArray[Math.floor(Math.random() * 30)][Math.floor(Math.random() * 20)]
  }

  const addRandomWordToCurrent = (word: any) => {
    return (dispatch(addCurrentSprintWord(word)))
  }

  const generateAnswer = () => {
    if (Math.random() > 0.5) {
      // @ts-ignore
      correctAnswerFlag = true
      return currentSprintWord.wordTranslate
    } else {
      correctAnswerFlag = false
      // @ts-ignore
      return getRandomWord().wordTranslate
    }
  }

  const onclickHandlerCorrectAnswer = () => {
    if (correctAnswerFlag) {
      dispatch(addSprintRightAnswers(currentSprintWord))
      addRandomWordToCurrent(getRandomWord())
      generateAnswer()
    } else {
      dispatch(addSprintWrongAnswers(currentSprintWord))
      addRandomWordToCurrent(getRandomWord())
      generateAnswer()
    }
  }

  const onclickHandlerIncorrectAnswer = () => {
    if (!correctAnswerFlag) {
      dispatch(addSprintRightAnswers(currentSprintWord))
      addRandomWordToCurrent(getRandomWord())
      generateAnswer()
    } else {
      dispatch(addSprintWrongAnswers(currentSprintWord))
      addRandomWordToCurrent(getRandomWord())
      generateAnswer()
    }
  }

  return (
      <div className={'sprint-round-container'}>
        <div className='round-info-top-string'>
          <div className={'round-score'}>10000</div>
          <div className={'round-timer-container'}>
            <Timer/>
          </div>
          <button className={'audio-button'}></button>
        </div>
        <div className={'correct-answer-streak-container'}>
          <div className={'correct__answer__streak__item'}></div>
          <div className={'correct__answer__streak__item'}></div>
          <div className={'correct__answer__streak__item'}></div>
        </div>
        <div className='round-info-middle-string'>
          <div className={'current-word'}>{currentSprintWord.word === 'test' ? addRandomWordToCurrent(getRandomWord()) : currentSprintWord.word}</div>
          <div className={'current-word-translate'}>{generateAnswer()}</div>
        </div>
        <div className='answer-button-container'>
          <button className='incorrect-answer' onClick={onclickHandlerIncorrectAnswer}>Не верно</button>
          <button className='correct-answer' onClick={onclickHandlerCorrectAnswer}>Верно</button>
        </div>
      </div>
  )
}
