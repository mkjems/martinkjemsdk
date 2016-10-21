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

const PEGS_START = ['none', 'none', 'none','none'];
const FEEDBACK_START = ['none', 'none', 'none', 'none'];

const pegsReducer = (state=PEGS_START, action) => {
	switch (action.type) {
		case 'GAME_GIVE_UP':
			return state.map((val)=>{
				if(val !='select' && val !='none'){
					return val;
				}
				return 'none';
			});
		case 'BEGIN_NEW_ROW':
			if(action.makeSelectable) {
				return ['select', 'select', 'select', 'select'];
			}
			return state;
		case 'CHOSE_THIS_COLOR':
			if(action.isActiveRow) {
				const pegs = [
					...state.slice(0, action.selectedPeg),
					action.name,
					...state.slice(action.selectedPeg+1)
				];
				return pegs;
			}
			return state;
		default:
			return state;
	}
};

const feedbackReducer = (state=FEEDBACK_START, action, pegs) => {
	switch (action.type) {
		case 'GIVE_FEEDBACK':
			if(action.isActiveRow) {
				return calculateFeedback(action.secretCode, pegs);
			}
			return state;
		default:
			return state;
	}
};

const rowReducer = (state=ROW_START, action) => {
	switch (action.type) {
		case 'GAME_GIVE_UP':
			if(action.isActiveRow) {
				return {
					pegs: pegsReducer(state.pegs, action),
					feedback: state.feedback
				};
			}
			return state;
		case 'BEGIN_NEW_ROW':
			let betterAction;
			if(action.isActiveRow && isEqual(['none', 'none', 'none', 'none'], state.pegs)) {
				betterAction = Object.assign({}, action, {makeSelectable:true})
			} else {
				betterAction = action;
			}
			return {
				pegs: pegsReducer(state.pegs, betterAction),
				feedback: feedbackReducer(state.feedback, betterAction, state.pegs)
			};

			return state;
		case 'CHOSE_THIS_COLOR':
			return {
				pegs: pegsReducer(state.pegs, action),
				feedback: feedbackReducer(state.feedback, action)
			}
		case 'GIVE_FEEDBACK':
			return {
				pegs: state.pegs,
				feedback: feedbackReducer(state.feedback, action, state.pegs)
			}
		default:
			return state
	}
};

export default rowReducer;