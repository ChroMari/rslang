import React from 'react';
import Button from '../../../../components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { bookSelectors, changeSection } from '../../../../redux/slices/bookSlice';

import './_BookSectionNavDifficult.scss';

const BookSectionNavDifficult: React.FC = () => {
    const dispatch = useDispatch();
    const section = useSelector(bookSelectors.section);

    return (
        <div className="book-sections-nav-difficult">
            <Button
                className={section === 6 ? 'book-sections-nav__btn active' : 'book-sections-nav__btn'}
                onClick={() => {
                    dispatch(changeSection(6));
                }}
            >
                Сложные слова
            </Button>
        </div>
    );
};

export default BookSectionNavDifficult;
