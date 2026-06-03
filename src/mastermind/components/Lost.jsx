import React from 'react';
import classNames from 'classnames';

const Lost = ({onResetAll}) => {
	return (
		<div className={classNames('board', 'statusMessages')}>
			<p>You ran out of rows, you lost!</p>
			<button onClick={onResetAll} >Ok</button>
		</div>
	)
}

export default Lost