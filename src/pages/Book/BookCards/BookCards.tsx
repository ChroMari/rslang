import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BookCard from './BookCard/BookCard';

import './_BookCards.scss';
import { wordsSelectors } from '../../../redux/slices/wordsSlice';
import { fetchWords } from '../../../api/getWords';
import { bookSelectors } from '../../../redux/slices/bookSlice';
import useAudio from './useAudio';

const BookCards = () => {
    const wordsList = useSelector(wordsSelectors.wordsList);
    const section = useSelector(bookSelectors.section);
    const page = useSelector(bookSelectors.page);
    const dispatch = useDispatch();

    const collectAudio = useAudio();

    useEffect(() => {
        dispatch(fetchWords());
    }, [page, section]);

    return (
        <div className="book-cards">
            <div className="book-cards-container">
                {wordsList.map((word) => (
                    <BookCard key={word.id} word={word} collectAudio={collectAudio} />
                ))}
            </div>
        </div>
    );
};

export default BookCards;
