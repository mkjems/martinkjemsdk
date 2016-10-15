import React from 'react';
import {COLORS, SIDEWAYS_COLORS, TOP_VIEW_COLORS} from './constants.js'
import Hole from '../components/Hole.js';
import PegIllu from '../components/Peg.js';
import Pegsideways from '../components/Pegsideways.js';
import classNames from 'classnames'

import map from 'lodash.map';


const FeedbackPeg = ({pegType="none"}) => {
	return (
		<div className="feedback-item">
			<svg width="40px" height="40px">
   				{pegType==='red' ? (<circle cx="20" cy="20" r="10" strokeWidth="0" fill="#ff0000" />):null}
   				{pegType==='white' ? (<circle cx="20" cy="20" r="10" strokeWidth="0" fill="#ffffff" />):null}
   				{pegType==='none' ? (<circle cx="20" cy="20" r="4" strokeWidth="0" fill="#222222" />):null}
   			</svg>
	   	</div>
	)
};

const Feedback = ({feedbackPegs}) => {
	return (
		<div className="feedback">
			{feedbackPegs.map((type, index) => {
				return <FeedbackPeg key={index} pegType={type}/>
			})}
		</div>
	)
};

const Circle = ({peg}) => {
	const radius = (peg !== 'none') ? 30 : 10;
	return (
		<svg >
			<circle cx="50" cy="50" r={radius} strokeWidth="0" fill={COLORS[peg]} />
		</svg>
	);
}


const Peg = ({id, peg, onPegClick}) => {
	return (
		<div className="peg" onClick={()=>onPegClick(id)}>
			{peg === 'select' ? (<Hole type="svg-hole-animation" />): null}
			{peg === 'none' ? (<Hole type="svg-hole-normal"  />) : null}
			{(peg !== 'none') && (peg !== 'select') ? (<PegIllu peg={peg} colors={TOP_VIEW_COLORS[peg]}/>) : null}
		</div>
	)
}

const Boardrow = ({pegs, feedbackPegs, onPegClick}) => {

	return(
		<div className="board-row">
			{pegs.map((val,index) => {
				return <Peg key={index} id={index} peg={val} onPegClick={onPegClick}/>;
			})}
			<Feedback feedbackPegs={feedbackPegs} />
		</div>
	)
};

const Colorpicker = ({onChooseColor}) => {
	return (
		<div className="overlay">
			<div className="overlay-darken"></div>
			<div className="overlay-content">
				<div className="picker-box">
					{map(SIDEWAYS_COLORS, (colors, name) => {
						return (
							<div key={name} className="picker-color" onClick={()=>onChooseColor(name)}>
								<Pegsideways colors={colors} />
							</div>
						);
					})}
				</div>
				<h4 className="overlay-title">Choose a color</h4>
			</div>
		</div>
	)
}

const Gameplay = ({board, onPegClick}) => {
	return (
		<div>
			<div className="top">
				<h1>Mastermind</h1>
			</div>
			<div className="board">
				{board.map((row, index)=>{
					return <Boardrow key={index} pegs={row.pegs} feedbackPegs={row.feedback} onPegClick={onPegClick}/>;
				})}
				<div className="hidden-row">
					<div className="shell"></div>
				</div>
			</div>
		</div>
	)
};

class App extends React.Component {
	render() {
		const {dispatch, getState} = this.props;
	 	const {board, showColorpicker,} = getState();

	 	const onPegClick = (id) => {
	 		dispatch({
				type: 'SHOW_COLOR_PICKER',
				id
			});
	 	};

	 	const onChooseColor = (name) => {
	 		dispatch({
				type: 'CHOSE_THIS_COLOR',
				name
			});
	 	};
		return (
			showColorpicker?(<Colorpicker onChooseColor={onChooseColor} />) : (<Gameplay board={board} onPegClick={onPegClick}/>)
		)
	}
}

export default App