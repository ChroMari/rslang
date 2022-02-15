import React from 'react';
import BookSectionNavItems from './BookSectionNavItems/BookSectionNavItems';
import BookSectionNavDifficult from './BookSectionNavDifficult/BookSectionNavDifficult';

import './_BookSectionNav.scss';
import { useSelector } from 'react-redux';
import { userSelectors } from '../../../redux/slices/userSlice';

const BookSectionNav: React.FC = () => {
    const isAuth = useSelector(userSelectors.isAuth);

    return (
        <div className="book-sections-nav">
            <BookSectionNavItems />
            {isAuth && <BookSectionNavDifficult />}
        </div>
    );
};

export default BookSectionNav;
