import React from 'react';

const Lost = ({onResetAll}) => {
	return (
		<div className="board statusMessages">
			<p>You ran out of rows, you lost!</p>
			<button onClick={onResetAll} >Ok</button>
		</div>
	)
}

export default Lost
