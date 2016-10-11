import React from 'react';

const Menu = require('react-burger-menu').stack;

export default ({onContactClick}) => {
    return (
        <Menu >
            <a className="menu-item" href="/mastermind/">Mastermind</a>
            <a className="menu-item" onClick={onContactClick}>Contact</a>
        </Menu>
    );
}