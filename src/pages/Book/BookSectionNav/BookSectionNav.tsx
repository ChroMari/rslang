import React, { useEffect } from 'react';
import BookSectionNavItems from './BookSectionNavItems/BookSectionNavItems';
import BookSectionNavDifficult from './BookSectionNavDifficult/BookSectionNavDifficult';

import './_BookSectionNav.scss';
import { useDispatch, useSelector } from 'react-redux';
import { userSelectors } from '../../../redux/slices/userSlice';
import {bookSelectors, changeSection} from '../../../redux/slices/bookSlice';
import {BOOK_HARD_SECTION} from "../../../constants/Book";

const BookSectionNav: React.FC = () => {
    const userId = useSelector(userSelectors.userId);
    const section = useSelector(bookSelectors.section);

    const dispatch = useDispatch();
    useEffect(() => {
        userId === null && section === BOOK_HARD_SECTION && dispatch(changeSection(0));
    }, [userId]);

    return (
        <div className="book-sections-nav">
            <BookSectionNavItems />
            {userId && <BookSectionNavDifficult />}
        </div>
    );
};

export default BookSectionNav;
