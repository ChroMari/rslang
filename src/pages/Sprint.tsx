import { URL_API_WORDS } from '../constants/Url';
import { useDispatch, useSelector } from 'react-redux';
import {chooseDifficultyLevel} from './DifficultyLevelSlice';
import { text } from 'stream/consumers';
import { useState } from 'react';
import { RootStore } from './Store';
import { addSprintWords } from './SprintSlice';
import { addCurrentSprintWord } from './CurrentSprintWordSlice';
import './Sprint.scss'

export const Sprint = () => {
  const wordsArray = useSelector((state: RootStore) => state.addSprintWords.sprintWords)
  const difficultyLevel = useSelector((state: RootStore) => state.chooseDifficultyLevel.difficultyLevel)
  const currentSprintWord = useSelector((state:RootStore) => state.addCurrentSprintWord.currentSprintWord)

  const dispatch = useDispatch()

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
    let levelOfDifficulty = difficultyLevel ? '1' : difficultyLevel
    for (let i = 0; i < 30; i++) {
      fetchGetWords(levelOfDifficulty, i)
    }
  }

  const getWord = () => {
    return wordsArray == null || undefined
        ? null
        : dispatch(addCurrentSprintWord(wordsArray[Math.floor(Math.random() * 30)][Math.floor(Math.random() * 20)]))
  }

  let correctAnswerFlag = false
  let correctAnswersArray = []
  let wrongAnswersArray = []

  const generateAnswer = () => {
    if (Math.random() > 0.5) {
      correctAnswerFlag = true
      // @ts-ignore
      return word.wordTranslate
    } else {
      correctAnswerFlag = false
      // @ts-ignore
      return getWord().wordTranslate
    }
  }


  return (
      <div className={'sprint-round-container'}>
        <div className='round-info-top-string'>
          <div className={'round-score'}>10000</div>
          <div className={'round-timer-container'}>
            <div className={'round-timer'} onClick={getChunkOfWords}>60</div>
          </div>
          <button className={'audio-button'} onClick={getWord}></button>
        </div>
        <div className={'correct-answer-streak-container'}>
          <div className={'correct__answer__streak__item'}></div>
          <div className={'correct__answer__streak__item'}></div>
          <div className={'correct__answer__streak__item'}></div>
        </div>
        <div className='round-info-middle-string'>
          <div className={'current-word'}>{currentSprintWord.word}</div>
          <div className={'current-word-translate'}>{currentSprintWord.wordTranslate}</div>
        </div>
        <div className='answer-button-container'>
          <button className='incorrect-answer'>Не верно</button>
          <button className='correct-answer'>Верно</button>
        </div>
      </div>
  )
}
