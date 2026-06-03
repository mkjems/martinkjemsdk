import React from 'react';


const Won = ({onResetAll, activeRow}) => {
	return (
		<div className="board statusMessages">
			<p>
				You solved the secret code in {(activeRow+1)} attempts!
			</p>
			<button onClick={onResetAll}>Ok</button>
		</div>
	)
}

export default Won
