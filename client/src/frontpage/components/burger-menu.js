import React from 'react';

const Menu = require('react-burger-menu').stack;

export default () => {
    return (
        <Menu >
            <a className="menu-item" href="/mastermind/">Mastermind</a>
        </Menu>
    );
}