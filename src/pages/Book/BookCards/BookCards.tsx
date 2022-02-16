import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useAudio from './useAudio';

import BookCard from './BookCard/BookCard';
import { wordsSelectors } from '../../../redux/slices/wordsSlice';
import { fetchHardWords, fetchWords, fetchWordsAuthorized } from '../../../api/getWords';
import { bookSelectors, changeIsLearnedPage } from '../../../redux/slices/bookSlice';
import { userSelectors } from '../../../redux/slices/userSlice';
import { BOOK_HARD_SECTION } from '../../../constants/Book';

import './_BookCards.scss';

const BookCards = () => {
    const wordsList = useSelector(wordsSelectors.wordsList);
    const section = useSelector(bookSelectors.section);
    const page = useSelector(bookSelectors.page);
    const isLearnedPage = useSelector(bookSelectors.isLearnedPage);
    const userId = useSelector(userSelectors.userId);
    const dispatch = useDispatch();

    const collectAudio = useAudio();

    const getWords = () => {
        if (section === BOOK_HARD_SECTION && userId) dispatch(fetchHardWords());
        else dispatch(userId ? fetchWordsAuthorized() : fetchWords());
    };

    useEffect(() => {
        const isDifficulty = wordsList.every((el) => el.userWord?.difficulty);
        dispatch(changeIsLearnedPage(isDifficulty));
    });

    useEffect(() => {
        getWords();
    }, [page, section, userId]);

    return (
        <div className="book-cards">
            {section !== BOOK_HARD_SECTION && isLearnedPage && (
                <div className="book-cards__learned">Все слова освоены</div>
            )}
            {!wordsList.length && <div className='book-cards__empty'><h3>В этом разделе еще нет слов</h3></div>}
            <div className="book-cards-container">
                {wordsList.map((word) => (
                    <BookCard key={word.word} word={word} collectAudio={collectAudio} />
                ))}
            </div>
        </div>
    );
};

export default BookCards;
