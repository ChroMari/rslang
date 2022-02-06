import React from 'react';
import Button from '../../../../../components/Button/Button';

import './_BookCardFooter.scss';

const BookCardFooter = () => {
    return (
        <div className="book-card-footer">
            <Button className="book-card-footer__btn book-card-footer-audio__btn" />
            <Button className="book-card-footer__btn book-card-footer-hard__btn">сложное</Button>
            <Button className="book-card-footer__btn book-card-footer-learn__btn">выучил</Button>
        </div>
    );
};

export default BookCardFooter;
