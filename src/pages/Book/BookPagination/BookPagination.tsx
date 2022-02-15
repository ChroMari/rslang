import React from 'react';

import Button from '../../../components/Button/Button';
import BookPaginationContainer from './BookPaginationContainer/BookPaginationContainer';
import { useSelector } from 'react-redux';
import { bookSelectors } from '../../../redux/slices/bookSlice';
import { BOOK_HARD_SECTION } from '../../../constants/Book';

import './_BookPagination.scss';

const BookPagination = () => {
    const section = useSelector(bookSelectors.section);
    const isLearnedPage = useSelector(bookSelectors.isLearnedPage);
    return (
        <div className="book-pagination">
            <Button className="book-game__btn" disabled={isLearnedPage && section !== BOOK_HARD_SECTION}>
                Аудиовызов
            </Button>
            {section !== BOOK_HARD_SECTION && <BookPaginationContainer />}
            <Button className="book-game__btn" disabled={isLearnedPage && section !== BOOK_HARD_SECTION}>
                Спринт
            </Button>
        </div>
    );
};

export default BookPagination;
