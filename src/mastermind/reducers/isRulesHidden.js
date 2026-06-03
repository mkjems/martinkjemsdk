const isRulesHiddenReducer = (state=true, action)=>{
	switch (action.type) {
		case 'TOGGLE_RULES':
			return !state;
		default:
			return state
	}
}

export default isRulesHiddenReducer;