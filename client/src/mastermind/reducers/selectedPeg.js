const selectedPegReducer = (state=undefined, action) => {
	switch (action.type) {
		case 'SHOW_COLOR_PICKER':
			return action.id;
		case 'BEGIN_NEW_ROW':
			return undefined;
		default:
			return state
	}
};

export default selectedPegReducer;