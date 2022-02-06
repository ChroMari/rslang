import React from 'react';
import './_Button.scss';

type Props = {
    className: string
}


const Button: React.FC<Props> = ({ children , className }) => {
    return <button className={`btn ${className}`}>{children}</button>;
};

export default Button;
