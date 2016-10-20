import React from 'react';

const Gaveup = ({onResetAll}) => {
	return (
		<div className="board">
			You gave up
			<button onClick={onResetAll}>Ok</button>
		</div>
	)
}

export default Gaveup