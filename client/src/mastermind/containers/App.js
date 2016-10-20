import React from 'react';
import Gameplay from '../components/Gameplay';
import Header from '../components/Header';
import Intro from '../components/Intro';

import { clearState } from '../script/localStorage';

import {
	gameBegin,
	gameGiveUp,
	gameWin,
	gameLoose,
	onPegClick,
	onChooseColor,
	beginNewRow,
	hideColorPicker,
	giveFeedback,
	onAdvanceSelector,
	resetGame,
	onHideSecretCode,
	revealSecretCode,
	onToggleSecretCode,
	randomizeCode,
	gameIntro
} from '../actions';

import {NUM_ROWS} from '../script/constants';

var App  = React.createClass({

	render: function(){
		const {dispatch, getState} = this.props;
	 	const {board, showColorpicker, activeRow, selectedPeg, secretCode, isCodeHidden, gameStatus} = getState();

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
	 		}, onSubmitRow: () => {
	 			dispatch(giveFeedback());
	 			const {board, activeRow} = getState();
	 			const didSolveCode = board[activeRow].feedback.reduce((acc, val) => {
	 				return acc && (val === 'red');
	 			}, true);
	 			dispatch(hideColorPicker());
	 			if(didSolveCode){
	 				console.log('You solved it');
	 				dispatch(gameWin());
	 			} else {
	 				if (NUM_ROWS != (activeRow+1)) {
			 			dispatch(beginNewRow());
			 			return;
	 				}
 					console.log('You loose');
 					dispatch(revealSecretCode());
 					dispatch(gameLoose());
	 			}
	 			dispatch(revealSecretCode());
	 		},
	 		secretCode,
	 		isCodeHidden,
	 		gameStatus,
	 		onResetAll: ()=>{
	 			dispatch(gameIntro());
	 			dispatch(resetGame());
	 			clearState();
	 		}
	 	}
	 	const onReset = () => {
	 		dispatch(resetGame());
	 	}
	 	const onToggleHideCode = () => {
 			dispatch(onToggleSecretCode());
 		}
 		const onRandomCode = () => {
 			dispatch(randomizeCode());
 		}
 		const onStartGame = () => {
 			console.log('startGame');
			const {dispatch, getState} = this.props;
			const {isCodeHidden} = getState();
			setTimeout(function(){
				if(!isCodeHidden){
					dispatch(onHideSecretCode());
				}
			}, 1000);

			let count = 0;
			const counter = () => {
				count++
				dispatch(randomizeCode());
				if(count < 25) {
					setTimeout(counter, 100);
				}
			};
			counter();
			dispatch(gameBegin());
 		}
 		const onGiveUp = () => {
 			console.log('you gave up');
 			dispatch(revealSecretCode());
 			dispatch(gameGiveUp());
 		}
		return (
			<div>
				{(gameStatus!='intro') ? <Header onStartGame={onStartGame} onGiveUp={onGiveUp} />: null}
				{(gameStatus!='intro') ? <Gameplay {...props} /> : null}
				{(gameStatus=='intro') ? <Intro onStartGame={onStartGame} /> : null}
			</div>
		)
	}
});

export default App;