const isRevealHiddenReducer = (state=true, action)=>{
	switch (action.type) {
		case 'GAME_GIVE_UP':
			return true;
		case 'GAME_BEGIN':
			return false;
		case 'RESET_GAME':
			return false;
		default:
			return state
	}
}

export default isRevealHiddenReducer;