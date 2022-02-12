import React from 'react';
import './_Button.scss';

type Props = {
    className: string;
    onClick?: () => void;
};

const Button: React.FC<Props> = ({ children, className, onClick }) => {
    return (
        <button className={`btn ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
