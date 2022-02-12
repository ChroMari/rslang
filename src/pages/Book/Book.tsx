import React from 'react';
import BookSectionNav from './BookSectionNav/BookSectionNav';
import BookCards from './BookCards/BookCards';
import BookPagination from './BookPagination/BookPagination';
import { useSelector } from 'react-redux';
import { bookSelectors } from '../../redux/slices/bookSlice';

import './_Book.scss';

const Book = () => {
    const section = useSelector(bookSelectors.section);
    return (
        <div data-sec={section} className={`book`}>
            <div className="container">
                <BookSectionNav />
                <BookCards />
                <BookPagination />
            </div>
        </div>
    );
};

export default Book;
