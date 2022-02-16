import './Sprint.scss'
import { useSelector } from 'react-redux';
import { RootStore } from './Store';
export const SprintResults = () => {
    const rightAnswers = useSelector((state:RootStore) => state.addSprintRightAnswers.sprintRightAnswers)
    const wrongAnswers = useSelector((state:RootStore) => state.addSprintWrongAnswers.sprintWrongAnswers)
    const sprintScore = useSelector((state:RootStore) => state.addCurrentSprintScore.currentSprintScore)

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
            <button className='sprint-result-end-button'>Завершить игру</button>
        </div>
    )
}
