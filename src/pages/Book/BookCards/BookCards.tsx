import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useAudio from './useAudio';

import BookCard from './BookCard/BookCard';
import { wordsSelectors } from '../../../redux/slices/wordsSlice';
import { fetchHardWords, fetchWords, fetchWordsAuthorized } from '../../../api/getWords';
import { bookSelectors } from '../../../redux/slices/bookSlice';
import { userSelectors } from '../../../redux/slices/userSlice';
import { BOOK_HARD_SECTION } from '../../../constants/Book';

import './_BookCards.scss';

const BookCards = () => {
    const [isLearned, setIsLearned] = useState(false);

    const wordsList = useSelector(wordsSelectors.wordsList);
    const section = useSelector(bookSelectors.section);
    const page = useSelector(bookSelectors.page);
    const isAuth = useSelector(userSelectors.isAuth);
    const dispatch = useDispatch();

    const collectAudio = useAudio();

    const getWords = () => {
        if (section === BOOK_HARD_SECTION) dispatch(fetchHardWords());
        else dispatch(isAuth ? fetchWordsAuthorized() : fetchWords());
    };

    useEffect(() => {
        setIsLearned(wordsList.every((el) => el.userWord));
    });

    useEffect(() => {
        getWords();
    }, [page, section]);

    return (
        <div className="book-cards">
            {isLearned && section !== BOOK_HARD_SECTION && <div className="book-cards__learned">Все слова освоены</div>}
            <div className="book-cards-container">
                {wordsList.map((word) => (
                    <BookCard key={word.word} word={word} collectAudio={collectAudio} />
                ))}
            </div>
        </div>
    );
};

export default BookCards;
