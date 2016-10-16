const selectedPegReducer = (state=undefined, action) => {
	switch (action.type) {
		case 'SHOW_COLOR_PICKER':
			return action.id;
		default:
			return state
	}
};

export default selectedPegReducer;