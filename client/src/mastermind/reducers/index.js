
import activeRowReducer from './activeRow';
import rowReducer from './row';
import boardReducer from './board';
import secretCodeReducer from './secretCode';
import showColorsReducer from './showColors.js';
import selectedPegReducer from './selectedPeg.js';

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
