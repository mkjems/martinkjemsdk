import React from 'react';

const Lost = ({onResetAll}) => {
	return (
		<div className="board">
			You ran out of rows, you lost!
			<button onClick={onResetAll} >Ok</button>
		</div>
	)
}

export default Lost