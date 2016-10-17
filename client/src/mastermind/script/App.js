import React from 'react';
import Gameplay from '../components/presentational';
import Header from '../components/header';

import {onPegClick, onChooseColor, onBeginNewRow} from '../actions';

class App extends React.Component {
	render() {
		const {dispatch, getState} = this.props;
	 	const {board, showColorpicker, activeRow, selectedPeg} = getState();

	 	const remaining = board[activeRow].pegs.filter((val)=>{
	 		return (val =='select' || val == 'none');
	 	}).length;
	 	if(remaining == 0){
	 		dispatch(onBeginNewRow());
	 	}

	 	const props = {
	 		board,
	 		showColorpicker,
	 		activeRow,
	 		selectedPeg,
	 		onPegClick: (id) => {
	 			dispatch(onPegClick(id));
	 		},
	 		onChooseColor: (name) => {
	 			dispatch(onChooseColor(name));
	 		}
	 	}
		return (
			<div>
				<Header />
				<Gameplay {...props} />
			</div>
		)
	}
}

export default App