import React from 'react';

const Won = ({onResetAll}) => {
	return (
		<div className="board">
			You solved the secret code !
			<button onClick={onResetAll}>Ok</button>
		</div>
	)
}

export default Won