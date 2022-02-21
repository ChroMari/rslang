import React from 'react';
import './_Button.scss';

type Props = {
    className: string;
    onClick?: () => void;
    disabled?: boolean;
};

const Button: React.FC<Props> = ({ children, className, onClick, disabled }) => {
    return (
        <button disabled={disabled} className={`btn ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
