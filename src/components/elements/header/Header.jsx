import React from 'react';
import './Header.scss';

export const Header = ({ children }) => {
    return (
        <div className="header">
            <h1 className="header__title">{children}</h1>
        </div>
    );
};
