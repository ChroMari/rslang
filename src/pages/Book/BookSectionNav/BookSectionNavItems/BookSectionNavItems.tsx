import Button from '../../../../components/Button/Button';
import React from 'react';
import './_BookSectionNavItems.scss';

const BookSectionNavItems: React.FC = () => {
    return (
        <div className="book-sections-nav-items">
            {[...Array(6)].map((e, i) => (
                <Button key={'key' + i} className="book-sections-nav__btn">
                    Раздел {i + 1}
                </Button>
            ))}
        </div>
    );
};

export default BookSectionNavItems;
