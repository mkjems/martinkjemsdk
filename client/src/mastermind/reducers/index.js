
import activeRowReducer from './activeRow';
import rowReducer from './row';
import boardReducer from './board';
import secretCodeReducer from './secretCode';
import showColorsReducer from './showColors.js';
import selectedPegReducer from './selectedPeg.js';
import isCodeHiddenReducer from './isCodeHidden';
import gameStatusReducer from './gameStatus';
import isRulesHiddenReducer from './isRulesHidden';
import isRevealHiddenReducer from './isRevealHidden';

const reducer = (state = {}, action) => {
	console.log('ACTION:',action);

	const isRevealHidden = isRevealHiddenReducer(state.isRevealHidden, action);
	const isRulesHidden = isRulesHiddenReducer(state.isRulesHidden, action);
	const gameStatus = gameStatusReducer(state.gameStatus, action);
	const isCodeHidden = isCodeHiddenReducer(state.isCodeHidden, action);
	const selectedPeg = selectedPegReducer(state.selectedPeg, action);
	const activeRow = activeRowReducer(state.activeRow, action);
	const secretCode = secretCodeReducer(state.secretCode, action);
	const board = boardReducer(state.board, action, activeRow, selectedPeg, secretCode);
	const showColorpicker = showColorsReducer(state.showColorpicker, action);

	const newState =  {
		isRevealHidden,
		isRulesHidden,
		gameStatus,
		isCodeHidden,
		selectedPeg,
		activeRow,
		board,
		secretCode,
		showColorpicker
	};

	console.log('STATE:',newState);
	console.log('*********************************************************')
	return newState;
}

export default reducer;
