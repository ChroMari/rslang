import React from 'react';
import BookSectionNavItems from './BookSectionNavItems/BookSectionNavItems';
import BookSectionNavHard from './BookSectionNavHard/BookSectionNavHard';

import './_BookSectionNav.scss';

const BookSectionNav: React.FC = () => {
    const isAuth = true; // пока нет состояния авторизации

    return (
        <div className="book-sections-nav">
            <BookSectionNavItems />
            {isAuth ? <BookSectionNavHard /> : null}
        </div>
    );
};

export default BookSectionNav;
