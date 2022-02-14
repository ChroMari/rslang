import React, { useEffect } from 'react';
import BookCardHeader from './BookCardHeader/BookCardHeader';
import BookCardMain from './BookCardMain/BookCardMain';
import BookCardFooter from './BookCardFooter/BookCardFooter';
import WordType from '../../../../utils/types/WordType';

import './_BookCard.scss';

type Props = {
    word: WordType;
    collectAudio: (list: Array<string>) => void;
};

const BookCard: React.FC<Props> = ({ word, collectAudio }) => {
    const className = word.userWord ? `book-card ${word.userWord.difficulty}` : 'book-card';

    useEffect(() => {
        return () => {
            collectAudio([]);
        };
    }, []);

    return (
        <div className={className}>
            <BookCardHeader
                word={word.word}
                image={word.image}
                wordTranslate={word.wordTranslate}
                transcription={word.transcription}
            />
            <div className="book-card-content">
                <BookCardMain
                    textMeaning={word.textMeaning}
                    textExample={word.textExample}
                    textMeaningTranslate={word.textMeaningTranslate}
                    textExampleTranslate={word.textExampleTranslate}
                />
                <BookCardFooter
                    audio={word.audio}
                    audioMeaning={word.audioMeaning}
                    audioExample={word.audioExample}
                    playAudio={collectAudio}
                    userWord={word.userWord}
                    _id={word._id}
                />
            </div>
        </div>
    );
};

export default BookCard;
