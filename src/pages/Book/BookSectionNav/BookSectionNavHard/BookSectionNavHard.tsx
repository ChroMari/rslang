import React from 'react';
import Button from '../../../../components/Button/Button';

import './_BookSectionNavHard.scss';

const BookSectionNavHard: React.FC = () => {
    return (
        <div className="book-sections-nav-hard">
            <Button className="book-sections-nav__btn">Сложные слова</Button>
        </div>
    );
};

export default BookSectionNavHard;
