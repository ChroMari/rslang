import React from 'react';
import BookSectionNav from './BookSectionNav/BookSectionNav';
import BookCards from './BookCards/BookCards';
import BookPagination from './BookPagination/BookPagination';
import { useSelector } from 'react-redux';
import { bookSelectors } from '../../redux/slices/bookSlice';
import { ReactComponent as Loader } from '../../assets/svg/loading.svg';
import { wordsSelectors } from '../../redux/slices/wordsSlice';

import './_Book.scss';
import {Footer} from "../../components/footer/Footer";

const Book = () => {
    const section = useSelector(bookSelectors.section);
    const status = useSelector(wordsSelectors.status);

    return (
        <div data-sec={section} className="book">
            <div className="container book-container">
                <BookSectionNav />
                <BookCards />
                <BookPagination />
            </div>

            <div className={status === 'pending' ? 'book-loader active' : 'book-loader'}>
                <Loader />
            </div>

            <Footer />
        </div>
    );
};

export default Book;
