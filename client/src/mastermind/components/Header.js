import React from 'react';

const Header = ({onStartGame, onGiveUp}) => {
	return (
		<div className="top">
			<button onClick={onGiveUp}>Resign</button>
		</div>
	)
}

export default Header