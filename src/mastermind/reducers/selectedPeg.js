const selectedPegReducer = (state=undefined, action) => {
	switch (action.type) {
		case 'SHOW_COLOR_PICKER':
			return action.id;
		case 'BEGIN_NEW_ROW':
			return undefined;
		case 'RESET_GAME':
			return undefined;
		case 'ENTER_ROW':
			return undefined;
		case 'ADVANCE_SELECTOR':
			console.log(action);
			console.log('CURRENT STATE', state);
			var res = action.pegs.reduce((acc, val, index)=>{
				console.log('---------', acc, index, val);
				if(acc===undefined && val=='select'){
					return index;
				}
				return acc;
			}, undefined);
			if (res == undefined){
				res = undefined;
			}
			console.log('**RES**', res);
			return res;
		default:
			return state
	}
};

export default selectedPegReducer;