import {
	BOARD_START
} from '../script/constants.js';

import rowReducer from './row.js';

const boardReducer = (state=BOARD_START, action, activeRow, selectedPeg, secretCode) => {
	const betterAction = Object.assign(
		{},
		action,
		{selectedPeg},
		{secretCode: secretCode}
	);
	switch (action.type) {
		case 'GAME_GIVE_UP':
			return state.map((row, index) => {
				return rowReducer(row, Object.assign({},betterAction,{isActiveRow: (index === activeRow)}));
			});
		case 'BEGIN_NEW_ROW':
			return state.map((row, index) => {
				return rowReducer(row, Object.assign({},betterAction,{isActiveRow: (index === activeRow)}));
			});
		case 'CHOSE_THIS_COLOR':
			return state.map((row, index) => {
				return rowReducer(row, Object.assign({},betterAction,{isActiveRow: (index === activeRow)}));
			});
		case 'RESET_GAME':
			return BOARD_START;
		case 'GIVE_FEEDBACK':
			return state.map((row, index) => {
				return rowReducer(row, Object.assign({},betterAction,{isActiveRow: (index === activeRow)}));
			});
		default:
			return state
	}
};

export default boardReducer;