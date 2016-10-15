import {
	BOARD_START,
	PEG_COLORS,
	CODE_LENGTH,
	ROW_START
} from './constants.js';

import {intersection, includes, compact} from 'lodash';

const activeRowReducer = (state=0, action)=>{
	switch (action.type) {
		case 'ADD_NEW_ROW':
			return state +1
		default:
			return state
	}
}

function calculateFeedback(secret, answer) {
	console.log('##########################');
	console.log(secret, answer);

	const num_reds_arr = secret.map((val, index) => {
		return val == answer[index];
	});
	const num_reds = compact(num_reds_arr).length;
	const reds_arr = Array(num_reds).fill('red');


	var num_found_in_secret = secret.map((val) => {
		return answer.includes(val);
	});
	num_found_in_secret = compact(num_found_in_secret);

	console.log('num_found_in_secret', num_found_in_secret)

	const num_whites = (num_found_in_secret.length) - num_reds;

	console.log('num_whites', num_whites);

	const whites_arr = Array(num_whites).fill('white');

	const none_arr = Array(4 - ( num_whites + num_reds) ).fill('none');
	console.log('##########################');
	return [...reds_arr, ...whites_arr, ...none_arr];
}

const rowReducer = (state=ROW_START, action) => {
	switch (action.type) {
		case 'CHOSE_THIS_COLOR':
			if(action.isActiveRow) {
				const pegs = [
					...state.pegs.slice(0, action.selectedPeg),
					action.name,
					...state.pegs.slice(action.selectedPeg+1)
				];

				const remaining = pegs.filter((val)=>{
					return val == 'select';
				})

				if (remaining.length === 0){
					var feedback = calculateFeedback(action.secretCode, pegs);
				} else {
					var feedback = state.feedback;
				}
				return {
					pegs: pegs,
					feedback: feedback
				}
			}
			return state;
		default:
			return state
	}
};

const boardReducer = (state=[], action, activeRow, selectedPeg, secretCode) => {
	switch (action.type) {
		case 'BEGIN_NEW_GAME':
			return BOARD_START;
		case 'CHOSE_THIS_COLOR':
			return state.map((row, index) => {
				const betterAction = Object.assign(
					{},
					action,
					{isActiveRow: (index === activeRow)},
					{selectedPeg},
					{secretCode: secretCode}
				);
				return rowReducer(row, betterAction);
			});
		default:
			return state
	}
};

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

const showColorsReducer = (state=false, action) => {
	switch (action.type) {
		case 'SHOW_COLOR_PICKER':
			return true;
		case 'CHOSE_THIS_COLOR':
			return false;
		default:
			return state
	}
};

const selectedPegReducer = (state=undefined, action) => {
	switch (action.type) {
		case 'SHOW_COLOR_PICKER':
			return action.id;
		default:
			return state
	}
};

const reducer = (state = {}, action) => {
	console.log('ACTION:',action);
	const selectedPeg = selectedPegReducer(state.selectedPeg, action);
	const activeRow = activeRowReducer(state.activeRow, action);
	const secretCode = secretCodeReducer(state.secretCode, action);
	const board = boardReducer(state.board, action, activeRow, selectedPeg, secretCode);
	const showColorpicker = showColorsReducer(state.showColorpicker, action);
	const res =  {
		selectedPeg,
		activeRow,
		board,
		secretCode,
		showColorpicker
	};
	console.log('STATE:',res);
	console.log('*********************************************************')
	return res;
}

export default reducer;
