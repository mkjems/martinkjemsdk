import {PEG_COLORS} from '../script/constants.js';


const createSecretCode = () => {
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
};

const secretCodeReducer = (state=createSecretCode(), action) => {
	switch (action.type) {
		default:
			return state
	}
};

export default secretCodeReducer;