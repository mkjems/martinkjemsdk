import {
	CODE_LENGTH,
	ROW_START
} from '../script/constants.js';

import {intersection, includes, compact} from 'lodash';

var isEqual = require('lodash.isequal');

function calculateFeedback(secret, answer) {
	const num_reds_arr = secret.map((val, index) => {
		return val == answer[index];
	});
	const num_reds = compact(num_reds_arr).length;
	const reds_arr = Array(num_reds).fill('red');
	var num_found_in_secret = secret.map((val) => {
		return answer.includes(val);
	});
	num_found_in_secret = compact(num_found_in_secret);
	const num_whites = (num_found_in_secret.length) - num_reds;
	const whites_arr = Array(num_whites).fill('white');
	const none_arr = Array(4 - ( num_whites + num_reds) ).fill('none');
	return [...reds_arr, ...whites_arr, ...none_arr];
}

const rowReducer = (state=ROW_START, action) => {
	switch (action.type) {
		case 'BEGIN_NEW_ROW':
			if(action.isActiveRow && isEqual(['none', 'none', 'none', 'none'], state.pegs)) {
				return {
					pegs: ['select', 'select', 'select', 'select'],
					feedback: state.feedback
				};
			}
			return state;
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

export default rowReducer;