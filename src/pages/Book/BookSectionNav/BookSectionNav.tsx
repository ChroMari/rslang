import React from 'react';
import BookSectionNavItems from './BookSectionNavItems/BookSectionNavItems';
import BookSectionNavDifficult from './BookSectionNavDifficult/BookSectionNavDifficult';

import './_BookSectionNav.scss';

const BookSectionNav: React.FC = () => {
    const isAuth = true; // пока нет состояния авторизации

    return (
        <div className="book-sections-nav">
            <BookSectionNavItems />
            {isAuth ? <BookSectionNavDifficult /> : null}
        </div>
    );
};

export default BookSectionNav;
