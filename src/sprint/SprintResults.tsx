import './Sprint.scss'
import { useDispatch, useSelector } from 'react-redux';
import { chooseDifficultyLevel } from '../redux/slices/sprintSlices/DifficultyLevelSlice';
import { removeSprintWords } from '../redux/slices/sprintSlices/SprintSlice';
import { removeCurrentSprintWord } from '../redux/slices/sprintSlices/CurrentSprintWordSlice';
import { removeSprintRightAnswers } from '../redux/slices/sprintSlices/SprintRightAnswersSlice';
import { removeSprintWrongAnswers } from '../redux/slices/sprintSlices/SprintWrongAnswersSlice';
import { toggleTime } from '../redux/slices/sprintSlices/TimerSlice';
import { addCurrentSprintWordTranslate } from '../redux/slices/sprintSlices/CurrentSprintTranslateSlice';
import { addCurrentSprintScore } from '../redux/slices/sprintSlices/SprintScoreSlice';
import { addCurrentSprintScoreStreak } from '../redux/slices/sprintSlices/CurrentSprintScoreStreakSlice';
import { StoreType } from '../redux/store';
import { NavLink } from 'react-router-dom';
export const SprintResults = () => {
    const rightAnswers = useSelector((state:StoreType) => state.addSprintRightAnswers.sprintRightAnswers)
    const wrongAnswers = useSelector((state:StoreType) => state.addSprintWrongAnswers.sprintWrongAnswers)
    const sprintScore = useSelector((state:StoreType) => state.addCurrentSprintScore.currentSprintScore)
    const dispatch = useDispatch()

    const onclickEndButton = () => {
        dispatch(removeSprintWords([]))
        dispatch(removeCurrentSprintWord(''))
        dispatch(removeSprintRightAnswers([]))
        dispatch(removeSprintWrongAnswers([]))
        dispatch(chooseDifficultyLevel(''))
        dispatch(toggleTime(60))
        dispatch(addCurrentSprintWordTranslate(''))
        dispatch(addCurrentSprintScore(0))
        dispatch(addCurrentSprintScoreStreak(0))
    }

    return (
        <div className={'sprint-result-container'}>
            <div className='sprint-result-title'>
                <div className='sprint-result-main-title'>Результат игры</div>
                <div className='sprint-result-main-subtitle'>Вы набрали {sprintScore} очков</div>
            </div>
            <div className='sprint-result-answers-block'>
                <div className='sprint__result__answers__block__item'>
                    <div className='sprint__result__answers__block__item__title'>Я знаю</div>
                    <div className='sprint__result__answers__block__item__answers__container'>
                        <div className='sprint__result__answers__block__item__answers__item'>
                            {rightAnswers.length > 0
                                ? rightAnswers.map((item) => (
                                //@ts-ignore
                                <div className='sprint__word'>{item.word} - {item.wordTranslate}</div>))
                                : <div className='sprint__word'>Нет неправильных ответов</div>}
                        </div>
                    </div>
                </div>
                <div className='sprint__result__answers__block__item'>
                    <div className='sprint__result__answers__block__item__title'>Я не знаю</div>
                    <div className='sprint__result__answers__block__item__answers__container'>
                        <div className='sprint__result__answers__block__item__answers__item'>
                            {wrongAnswers.length > 0
                                ? wrongAnswers.map((item) => (
                                    //@ts-ignore
                                    <div className='sprint__word'>{item.word} - {item.wordTranslate}</div>))
                                : <div className='sprint__word'>Нет неправильных ответов</div>}
                        </div>
                    </div>
                </div>
            </div>
            <NavLink to={'/'}><button className='sprint-result-end-button' onClick={onclickEndButton}>Завершить игру</button></NavLink>
        </div>
    )
}
