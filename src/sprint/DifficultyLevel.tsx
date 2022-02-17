import './DifficultyLevel.scss'
import { useDispatch, useSelector } from 'react-redux';
import { chooseDifficultyLevel } from '../redux/slices/sprintSlices/DifficultyLevelSlice';
import { URL_API_WORDS } from '../constants/Url';
import { addSprintWords } from '../redux/slices/sprintSlices/SprintSlice';
import { StoreType } from '../redux/store';

export const DifficultyLevel = () => {
    const dispatch = useDispatch()
    const difficultyLevel = useSelector((state: StoreType) => state.chooseDifficultyLevel.difficultyLevel)

    const fetchGetWords = (levelOfDifficulty: string, page: number) => {
        console.log(levelOfDifficulty);
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
        for (let i = 0; i < 30; i++) {
            fetchGetWords(difficultyLevel, i)
        }
    }

    const buttons = [
        {id: '0', value: '1'},
        {id: '1', value: '2'},
        {id: '2', value: '3'},
        {id: '3', value: '4'},
        {id: '4', value: '5'},
        {id: '5', value: '6'}]

    return (
        <div className={'difficulty-level-container'}>
            <div className={'difficulty-level-title'}>Спринт</div>
            <div className={'difficulty-level-description'}>выберите соответствует ли перевод заданному слову</div>
            <div className={'difficulty-level-button-block'}>
                {buttons.map((item)=>(
                    <button className={`difficulty__level__button`} value={item.id} key={item.id}
                            onClick={(e)=> {
                                dispatch(chooseDifficultyLevel(item.id))
                                getChunkOfWords()
                            }}
                    >Раздел {item.value}</button>
                    )
                )}
            </div>
            <button className={'close-button'}></button>
        </div>
    );
};
