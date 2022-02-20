import { useDispatch, useSelector } from 'react-redux';
import { StoreType } from '../../redux/store';
import { useEffect, useState } from 'react';
import { addCurrentSprintWordTranslate } from '../../redux/slices/sprintSlices/CurrentSprintTranslateSlice';
import { addCurrentSprintWord } from '../../redux/slices/sprintSlices/CurrentSprintWordSlice';
import { addCurrentSprintScoreStreak } from '../../redux/slices/sprintSlices/CurrentSprintScoreStreakSlice';
import { addCurrentSprintScore } from '../../redux/slices/sprintSlices/SprintScoreSlice';
import { addSprintRightAnswers } from '../../redux/slices/sprintSlices/SprintRightAnswersSlice';
import { addSprintWrongAnswers } from '../../redux/slices/sprintSlices/SprintWrongAnswersSlice';
import { Timer } from '../../sprint/Timer';
import './Audiocall.scss'

export const Audiocall = () => {
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
        return wordsArray.length !== 30 ? wordsArray[0][Math.floor(Math.random() * 19)] : wordsArray[Math.floor(Math.random() * 30)][Math.floor(Math.random() * 20)]
    }

    const [randomAnswerItem, setRandomAnswerItem] = useState('')
    const [randomAnswers, setRandomAnswers] = useState([])

    const getAudiocallAnswers = () => {
        removeAnswers()
        // @ts-ignore
        setRandomAnswers([currentSprintWord.wordTranslate, getRandomWord().wordTranslate, getRandomWord().wordTranslate, getRandomWord().wordTranslate])
        // @ts-ignore
        setRandomAnswers((prevState) => (shuffle(prevState)))
        // @ts-ignore
        // console.log([...new Set(randomAnswers)].length);
    }

    const removeAnswers = () => {
        setRandomAnswers([])
    }

    useEffect(() => {
        addRandomWordToCurrent(getRandomWord())
    },[])

    useEffect(() => {
        getAudiocallAnswers()
        if (currentSprintWord.word !== 'test') {
            audioHandler()
        }
    }, [currentSprintWord])


    function shuffle(array:[String]) {
        let currentIndex = array.length,  randomIndex;
        // @ts-ignore
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    const addRandomWordToCurrent = (word: any) => {
        dispatch(addCurrentSprintWordTranslate(word))
        return (dispatch(addCurrentSprintWord(word)))
    }

    const [currentRandomTranslate, setCurrentRandomTranslate] = useState('')

    const audioHandler = () => {
        // @ts-ignore
        const audio = new Audio(`https://rslanglearnwords.herokuapp.com/` + currentSprintWord.audio)
        audio.play()
    }

    //{currentTime === 0 ? <SprintResults/> : (wordsArray.length !== 30 ? <DifficultyLevel /> : <Sprint />)} - Условие для запуска


    return (
        <div className={'sprint-round-container audiocall-round-container'}>
            <div className='round-info-top-string'>
                <div className={'round-score'}>{sprintScore}</div>
                <div className={'round-timer-container'}>
                    <Timer/>
                </div>
            </div>
            <div className={'correct-answer-streak-container'}>
                <div className={'correct__answer__streak__item'} style={{background: `${sprintScoreStreak >= 10 ? '#79E196' : '#4F4F4F'}`}}></div>
                <div className={'correct__answer__streak__item'} style={{background: `${sprintScoreStreak >= 20 ? '#79E196' : '#4F4F4F'}`}}></div>
                <div className={'correct__answer__streak__item'} style={{background: `${sprintScoreStreak === 30 ? '#79E196' : '#4F4F4F'}`}}></div>
            </div>
            <div className='round-info-middle-string round-info-middle-string-audiocall'>
                <button className={'audio-button-audiocall'} onClick={audioHandler}></button>
            </div>
            <div className='audiocall-answer-button-container'>
                {randomAnswers.map((item, id) => (
                    <button className='audiocall-answer-button' key={id} value={item} onClick={(event)=> {
                        //@ts-ignore
                        if (event.target.value === currentSprintWord.wordTranslate) {
                            dispatch(addCurrentSprintScoreStreak(sprintScoreStreak === 30 ? sprintScoreStreak : sprintScoreStreak + 10))
                            dispatch(addCurrentSprintScore(sprintScore + 10 + sprintScoreStreak))
                            dispatch(addSprintRightAnswers(currentSprintWord))
                            addRandomWordToCurrent(getRandomWord())
                        } else {
                            dispatch(addCurrentSprintScoreStreak(0))
                            dispatch(addSprintWrongAnswers(currentSprintWord))
                            addRandomWordToCurrent(getRandomWord())
                        }
                    }}>{item}</button>
                    )
                )}
            </div>
        </div>
    )
}
