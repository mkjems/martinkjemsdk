import {PEG_COLORS} from '../script/constants.js';

const secretCodeReducer = (state=[], action) => {
	switch (action.type) {
		case 'BEGIN_NEW_GAME':
			return ['','','',''].reduce((acc, val) => {
				const randomValue = Math.floor(Math.random()*acc.pool.length);
				const newColor = acc.pool[randomValue]
				const newPool = acc.pool.filter((elm)=>{
					return elm !== newColor;
				});
				return {
					pool: newPool,
					drawn: acc.drawn.concat(newColor)
				}
			}, {pool: [...PEG_COLORS], drawn: []}).drawn;
		default:
			return state
	}
};

export default secretCodeReducer;