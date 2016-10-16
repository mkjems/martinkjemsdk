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

export default showColorsReducer