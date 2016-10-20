import React from 'react';

const Header = ({onStartGame, onGiveUp}) => {
	return (
		<div className="top">
			<button onClick={onGiveUp}>Give up</button>
		</div>
	)
}

export default Header