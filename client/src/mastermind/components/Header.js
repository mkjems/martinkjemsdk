import React from 'react';

const Header = ({onNewGame}) => {
	return (
		<div className="top">
			<h2>Mastermind</h2>
			<button onClick={onNewGame}>New game</button>
		</div>
	)
}

export default Header