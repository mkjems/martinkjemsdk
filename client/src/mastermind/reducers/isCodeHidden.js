
const isCodeHiddenReducer = (state=false, action)=>{
	switch (action.type) {
		case 'HIDE_SECRET_CODE':
			return true;
		case 'REVEAL_SECRET_CODE':
			return false;
		case 'TOGGLE_SECRET_CODE':
			return !state;
		case 'RESET_GAME':
			return false;
		default:
			return state
	}
}

export default isCodeHiddenReducer;