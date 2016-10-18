
const activeRowReducer = (state=0, action)=>{
	switch (action.type) {
		case 'BEGIN_NEW_ROW':
			return state +1;
		case 'RESET_GAME':
			return 0;
		default:
			return state
	}
}

export default activeRowReducer;