import {
	BOARD_START
} from '../script/constants.js';

import rowReducer from './row.js';

const boardReducer = (state=[], action, activeRow, selectedPeg, secretCode) => {
	const betterAction = Object.assign(
		{},
		action,
		{selectedPeg},
		{secretCode: secretCode}
	);
	switch (action.type) {
		case 'BEGIN_NEW_GAME':
			return BOARD_START;
		case 'BEGIN_NEW_ROW':
			return state.map((row, index) => {
				return rowReducer(row, Object.assign({},betterAction,{isActiveRow: (index === activeRow)}));
			});
		case 'CHOSE_THIS_COLOR':
			return state.map((row, index) => {
				return rowReducer(row, Object.assign({},betterAction,{isActiveRow: (index === activeRow)}));
			});
		default:
			return state
	}
};

export default boardReducer;