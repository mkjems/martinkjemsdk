import React from 'react';

let Counter = ({counterVal, increment, decrement}) => (
	<div>
		<h1>{counterVal}</h1>
		<button onClick={increment}>+</button>
		<button onClick={decrement}>-</button>
	</div>
);

export default Counter;