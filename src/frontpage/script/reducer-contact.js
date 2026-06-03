const contactReducer = (state=false, action) => {
	switch (action.type) {
		case 'TOGGLE_SHOW_CONTACT_INFO':
			return !state;
		default:
			return state;
	}
}
export default contactReducer;