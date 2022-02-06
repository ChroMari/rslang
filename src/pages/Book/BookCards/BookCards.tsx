import React from 'react';
import BookCard from './BookCard/BookCard';

import './_BookCards.scss';

const BookCards = () => {
    return (
        <div className="book-cards">
            <div className="book-cards-container">
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
            </div>
        </div>
    );
};

export default BookCards;
