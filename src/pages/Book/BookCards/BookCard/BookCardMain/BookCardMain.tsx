import React from 'react';

import './_BookCardMain.scss';
import WordType from '../../../../../utils/types/WordType';

type Props = Pick<WordType, 'textMeaning' | 'textExample' | 'textMeaningTranslate' | 'textExampleTranslate'>;

const BookCardMain: React.FC<Props> = ({ textMeaning, textExample, textMeaningTranslate, textExampleTranslate }) => {
    return (
        <div className="book-card-main">
            <div className="book-card-main-item">
                <p className="book-card-main-item__meaning" dangerouslySetInnerHTML={{ __html: textMeaning }} />
                <p className="book-card-main-item__example" dangerouslySetInnerHTML={{ __html: textExample }} />
            </div>
            <div className="book-card-main-item">
                <p className="book-card-main-item__meaning">{textMeaningTranslate}</p>
                <p className="book-card-main-item__example">{textExampleTranslate}</p>
            </div>
        </div>
    );
};

export default BookCardMain;
