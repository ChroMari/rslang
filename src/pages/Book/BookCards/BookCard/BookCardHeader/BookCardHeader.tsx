import React from 'react';

import './_BookCardHeader.scss';

const BookCardHeader = () => {
    return (
        <div className="book-card-header">
            <div
                className="book-card-header__img"
                style={{
                    backgroundImage: 'url("https://rslanglearnwords.herokuapp.com/files/01_0012.jpg")',
                }}
            />
            <div className="book-card-header-text">
                <h3 className="book-card-header-text__title">cultivate</h3>
                <p className="book-card-header-text__translation">
                    культивировать <span className="book-card-header-text__transcription">[kʌ́ltəvèit]</span>
                </p>
            </div>
        </div>
    );
};

export default BookCardHeader;
