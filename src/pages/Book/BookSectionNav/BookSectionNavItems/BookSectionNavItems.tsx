import Button from '../../../../components/Button/Button';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bookSelectors, changeSection } from '../../../../redux/slices/bookSlice';

import './_BookSectionNavItems.scss';

const BookSectionNavItems: React.FC = () => {
    const dispatch = useDispatch();
    const section = useSelector(bookSelectors.section);

    return (
        <div className="book-sections-nav-items">
            {[...Array(6)].map((e, i) => (
                <Button
                    key={'k' + i}
                    className={i === section ? 'book-sections-nav__btn active' : 'book-sections-nav__btn'}
                    onClick={() => {
                        dispatch(changeSection(i));
                    }}
                >
                    Раздел {i + 1}
                </Button>
            ))}
        </div>
    );
};

export default BookSectionNavItems;
