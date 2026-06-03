const showColorsReducer = (state=false, action) => {
	switch (action.type) {
		case 'SHOW_COLOR_PICKER':
			return true;
		case 'HIDE_COLOR_PICKER':
			return false;
		case 'RESET_GAME':
			return false;
		default:
			return state
	}
};

export default showColorsReducer