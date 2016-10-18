const showColorsReducer = (state=false, action) => {
	switch (action.type) {
		case 'SHOW_COLOR_PICKER':
			return true;
		case 'CHOSE_THIS_COLOR':
			return state;
		case 'BEGIN_NEW_ROW':
			return false;
		case 'RESET_GAME':
			return false;
		case 'ENTER_ROW':
			return false;
		default:
			return state
	}
};

export default showColorsReducer