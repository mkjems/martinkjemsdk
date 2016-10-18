const selectedPegReducer = (state=undefined, action) => {
	switch (action.type) {
		case 'SHOW_COLOR_PICKER':
			return action.id;
		case 'BEGIN_NEW_ROW':
			return undefined;
		case 'RESET_GAME':
			return undefined;
		case 'ENTER_ROW':
			return undefined;
		case 'ADVANCE_SELECTOR':
			return (state +1) % 4;
		default:
			return state
	}
};

export default selectedPegReducer;