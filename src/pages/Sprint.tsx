import { URL_API_WORDS } from '../constants/Url';
import { useDispatch, useSelector } from 'react-redux';
import {chooseDifficultyLevel} from './DifficultyLevelSlice';
import { text } from 'stream/consumers';
import { useState } from 'react';
import { RootStore } from './Store';
import { addSprintWords } from './SprintSlice';

export const Sprint = () => {
  const wordsArray = useSelector((state: RootStore) => state.addSprintWords.sprintWords)
  const difficultyLevel = useSelector((state: RootStore) => state.chooseDifficultyLevel.difficultyLevel)

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

  const getChunkOfWords = (levelOfDifficulty: string) => {
    for (let i = 0; i < 30; i++) {
      fetchGetWords(levelOfDifficulty, i)
    }
  }

  // const getWord = () => {
  //   return wordsArray[Math.floor(Math.random() * 30)][Math.floor(Math.random() * 20)]
  // }

  // let word = getWord()
  let correctAnswerFlag = false
  let correctAnswersArray = []
  let wrongAnswersArray = []

  // const generateAnswer = () => {
  //   if (Math.random() > 0.5) {
  //     correctAnswerFlag = true
  //     return word.wordTranslate
  //   } else {
  //     correctAnswerFlag = false
  //     return getWord().wordTranslate
  //   }
  // }

  return (
      <div>sprint</div>
  )
}
