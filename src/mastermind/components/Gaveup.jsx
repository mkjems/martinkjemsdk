import React from 'react';

const Gaveup = ({onResetAll, rowindex}) => {
	return (
		<div className="board statusMessages">
			<p>You gave up after {rowindex} attempts.</p>
			<button onClick={onResetAll}>Ok</button>
		</div>
	)
}

export default Gaveup
