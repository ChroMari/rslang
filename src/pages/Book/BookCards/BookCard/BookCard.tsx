import React from 'react';
import BookCardHeader from './BookCardHeader/BookCardHeader';
import BookCardMain from './BookCardMain/BookCardMain';
import BookCardFooter from './BookCardFooter/BookCardFooter';

import './_BookCard.scss';

const BookCard = () => {
    return (
        <div className="book-card">
            <BookCardHeader />
            <div className="book-card-content">
                <BookCardMain />
                <BookCardFooter />
            </div>
        </div>
    );
};

export default BookCard;
