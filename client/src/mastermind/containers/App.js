import React from 'react';
import Gameplay from '../components/presentational';
import Header from '../components/header';

import {
	onPegClick,
	onChooseColor,
	onBeginNewRow,
	onEnterRow,
	onGiveFeedback,
	onAdvanceSelector,
	resetGame
} from '../actions';

class App extends React.Component {
	render() {
		const {dispatch, getState} = this.props;
	 	const {board, showColorpicker, activeRow, selectedPeg} = getState();

	 	const remaining = board[activeRow].pegs.filter((val)=>{
	 		return (val =='select' || val == 'none');
	 	}).length;

	 	const props = {
	 		isCompleteRow: (remaining === 0),
	 		board,
	 		showColorpicker,
	 		activeRow,
	 		selectedPeg,
	 		onPegClick: (id) => {
	 			dispatch(onPegClick(id));
	 		},
	 		onChooseColor: (name) => {
	 			dispatch(onChooseColor(name));
	 			dispatch(onAdvanceSelector());
	 		}, onEnterRow: () => {
	 			dispatch(onGiveFeedback());
	 			dispatch(onEnterRow());
	 			dispatch(onBeginNewRow());
	 		}
	 	}
	 	const onNewGame = () => {
	 		dispatch(resetGame());
	 	}
		return (
			<div>
				<Header onNewGame={onNewGame}/>
				<Gameplay {...props} />
			</div>
		)
	}
}

export default App