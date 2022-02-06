import React from 'react';
import BookSectionNav from './BookSectionNav/BookSectionNav';
import BookCards from './BookCards/BookCards';

import './_Book.scss';

const Book = () => {
    return (
        <div className="book">
            <div className="container">
                <BookSectionNav />
                <BookCards />
            </div>
        </div>
    );
};

export default Book;
