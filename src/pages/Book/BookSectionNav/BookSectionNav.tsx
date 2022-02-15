import React from 'react';
import BookSectionNavItems from './BookSectionNavItems/BookSectionNavItems';
import BookSectionNavDifficult from './BookSectionNavDifficult/BookSectionNavDifficult';

import './_BookSectionNav.scss';
import { useSelector } from 'react-redux';
import { userSelectors } from '../../../redux/slices/userSlice';

const BookSectionNav: React.FC = () => {
    const userId = useSelector(userSelectors.userId);

    return (
        <div className="book-sections-nav">
            <BookSectionNavItems />
            {userId && <BookSectionNavDifficult />}
        </div>
    );
};

export default BookSectionNav;
