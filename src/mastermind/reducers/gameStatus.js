
const gameStatusReducer = (state='intro', action)=>{
	switch (action.type) {
		case 'GAME_BEGIN':
			return 'playing';
		case 'GAME_WIN':
			return 'won';
		case 'GAME_LOOSE':
			return 'lost';
		case 'GAME_GIVE_UP':
			return 'gave_up';
		case 'GAME_INTRO':
			return 'intro';
		default:
			return state
	}
}

export default gameStatusReducer;