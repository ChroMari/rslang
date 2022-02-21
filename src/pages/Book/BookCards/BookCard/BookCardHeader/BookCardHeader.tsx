import React from 'react';
import { URL_API } from '../../../../../constants/Url';
import WordType from '../../../../../utils/types/WordType';

import './_BookCardHeader.scss';

const BookCardHeader: React.FC<Partial<WordType>> = ({ word, image, wordTranslate, transcription }) => {
    return (
        <div className="book-card-header">
            <div
                className="book-card-header__img"
                style={{
                    backgroundImage: `url("${URL_API}/${image}")`,
                }}
            />
            <div className="book-card-header-text">
                <h3 className="book-card-header-text__title">{word}</h3>
                <p className="book-card-header-text__translation">
                    {wordTranslate} <span className="book-card-header-text__transcription">{transcription}</span>
                </p>
            </div>
        </div>
    );
};

export default BookCardHeader;
