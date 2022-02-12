import React from 'react';

import Button from '../../../components/Button/Button';
import BookPaginationContainer from "./BookPaginationContainer/BookPaginationContainer";

import './_BookPagination.scss';

const BookPagination = () => {
    return (
        <div className="book-pagination">
            <Button className="book-game__btn">Аудиовызов</Button>
            <BookPaginationContainer />
            <Button className="book-game__btn">Спринт</Button>
        </div>
    );
};

export default BookPagination;
