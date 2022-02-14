import './DifficultyLevel.scss'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { chooseDifficultyLevel } from './DifficultyLevelSlice';

export const DifficultyLevel = () => {
    const dispatch = useDispatch()

    const buttons = [
        {id: 1, value: '1'},
        {id: 2, value: '2'},
        {id: 3, value: '3'},
        {id: 4, value: '4'},
        {id: 5, value: '5'},
        {id: 6, value: '6'}]

    return (
        <div className={'difficulty-level-container'}>
            <div className={'difficulty-level-title'}>Спринт</div>
            <div className={'difficulty-level-description'}>выберите соответствует ли перевод заданному слову</div>
            <div className={'difficulty-level-button-block'}>
                {buttons.map((item)=>(
                    <button className={`difficulty__level__button`} value={item.value} key={item.id}
                            onClick={(e)=> {
                                dispatch(chooseDifficultyLevel(item.value))
                            }}
                    >Раздел {item.value}</button>
                    )
                )}
            </div>
            <button className={'close-button'}></button>
        </div>
    );
};
