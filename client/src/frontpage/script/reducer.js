import counterReducer from './reducer-counter';
import contactReducer from './reducer-contact';

const reducer = (state = {}, action) => {
	return {
		counterVal: counterReducer( state.counterVal, action),
		showContact: contactReducer( state.showContact, action)
	}
}

export default reducer;