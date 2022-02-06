import React from 'react';

import './_BookCardMain.scss';

const BookCardMain = () => {
    return (
        <div className="book-card-main">
            <div className="book-card-main-item">
                <p className="book-card-main-item__meaning">
                    To cultivate plants is to care for them and help them grow.
                </p>
                <p className="book-card-main-item__example">
                    A research company is cultivating new kinds of rice to aid poor countries.
                </p>
            </div>
            <div className="book-card-main-item">
                <p className="book-card-main-item__meaning">
                    Выращивать растения - значит заботиться о них и помогать им расти.
                </p>
                <p className="book-card-main-item__example">
                    Исследовательская компания выращивает новые виды риса, чтобы помочь бедным странам.
                </p>
            </div>
        </div>
    );
};

export default BookCardMain;
