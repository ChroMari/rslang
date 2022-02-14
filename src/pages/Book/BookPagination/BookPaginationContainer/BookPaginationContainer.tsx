import React from 'react';
import Button from '../../../../components/Button/Button';

import { useDispatch, useSelector } from 'react-redux';
import { bookSelectors, changePage } from '../../../../redux/slices/bookSlice';
import { BOOK_MAX_PAGE, BOOK_MIN_PAGE } from '../../../../constants/Book';

import './_BookPaginationContainer.scss';

const BookPaginationContainer = () => {
    const page = useSelector(bookSelectors.page);
    const dispatch = useDispatch();

    return (
        <div className="book-pagination-container">
            <Button
                disabled={page === BOOK_MIN_PAGE}
                className="book-pagination-prev__btn"
                onClick={() => {
                    dispatch(changePage('prev'));
                }}
            >
                {'\u003C'}
            </Button>
            <div className="book-pagination__page">
                {page + 1} / {BOOK_MAX_PAGE + 1}
            </div>
            <Button
                disabled={page === BOOK_MAX_PAGE}
                className="book-pagination-next__btn"
                onClick={() => {
                    dispatch(changePage('next'));
                }}
            >
                {'\u003E'}
            </Button>
        </div>
    );
};

export default BookPaginationContainer;
