import React from 'react';
import Button from '../../../../components/Button/Button';

import './_BookPaginationContainer.scss';

const BookPaginationContainer = () => {
    return (
        <div className="book-pagination-container">
            <Button className="book-pagination-prev__btn">{'\u003C'}</Button>
            <div className="book-pagination__page">1/30</div>
            <Button className="book-pagination-next__btn">{'\u003E'}</Button>
        </div>
    );
};

export default BookPaginationContainer;
