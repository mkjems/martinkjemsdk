import React from 'react';
import classNames from 'classnames';


const Gaveup = ({onResetAll, rowindex}) => {
	return (
		<div className={classNames('board', 'statusMessages')}>
			<p>You gave up after {rowindex} attempts.</p>
			<button onClick={onResetAll}>Ok</button>
		</div>
	)
}

export default Gaveup