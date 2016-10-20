
export const loadState  = () => {
	try {
		const serializedState = localStorage.getItem('state');
		if (serializedState === null) {
			return undefined;
		}
		const res = JSON.parse(serializedState);
		return res;
	} catch (err){
		return undefined;
	}
};

export const saveState = (state) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem('state', serializedState);
	} catch (err) {
		cosole.log('error retrieving state');
	}
}

export const clearState = () => {
	try {
		localStorage.removeItem('state');
	} catch (err) {
		cosole.log('error clearing state');
	}
}
