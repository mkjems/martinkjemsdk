const isRevealHiddenReducer = (state=false, action)=>{
	switch (action.type) {
		case 'GAME_GIVE_UP':
			return true;
		case 'GAME_BEGIN':
			return false;
		case 'GAME_WIN':
			return true;
		case 'RESET_GAME':
			return false;
		default:
			return state
	}
}

export default isRevealHiddenReducer;
