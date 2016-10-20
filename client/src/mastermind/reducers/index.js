
import activeRowReducer from './activeRow';
import rowReducer from './row';
import boardReducer from './board';
import secretCodeReducer from './secretCode';
import showColorsReducer from './showColors.js';
import selectedPegReducer from './selectedPeg.js';
import isCodeHiddenReducer from './isCodeHidden';
import gameStatusReducer from './gameStatus';

const reducer = (state = {}, action) => {
	console.log('ACTION:',action);

	const gameStatus = gameStatusReducer(state.gameStatus, action);
	const isCodeHidden = isCodeHiddenReducer(state.isCodeHidden, action);
	const selectedPeg = selectedPegReducer(state.selectedPeg, action);
	const activeRow = activeRowReducer(state.activeRow, action);
	const secretCode = secretCodeReducer(state.secretCode, action);
	const board = boardReducer(state.board, action, activeRow, selectedPeg, secretCode);
	const showColorpicker = showColorsReducer(state.showColorpicker, action);

	const newState =  {
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
