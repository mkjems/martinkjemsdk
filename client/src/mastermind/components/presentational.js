import React from 'react';
import classNames from 'classnames'
import map from 'lodash.map';

import {COLORS, SIDEWAYS_COLORS, TOP_VIEW_COLORS} from '../script/constants.js'
import Hole from './Hole.js';
import PegIllu from './Peg.js';
import Pegsideways from './Pegsideways.js';

const FeedbackPeg = ({pegType="none"}) => {
	return (
		<div className="feedback-item">
			<svg width="40px" height="40px">
   				{pegType==='red' ? (<circle cx="20" cy="20" r="10" strokeWidth="0" fill="#c85825" />):null}
   				{pegType==='white' ? (<circle cx="20" cy="20" r="10" strokeWidth="0" fill="#eee" />):null}
   				{pegType==='none' ? (<circle cx="20" cy="20" r="4" strokeWidth="0" fill="#333" />):null}
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



const Boardrow = ({showColorpicker,onChooseColor, rowindex, activeRow, pegs, feedbackPegs, onPegClick}) => {

	return(
		<div>
			<div className="board-row">
				{pegs.map((val,index) => {
					return (
						<Peg key={index} id={index} peg={val} onPegClick={onPegClick} />
					);
				})}
				<Feedback feedbackPegs={feedbackPegs} />
			</div>
			{ (activeRow == rowindex && showColorpicker) ?
				<Colorpicker onChooseColor={onChooseColor} />
				:null
			}
		</div>
	)
};

const Colorpicker = ({onChooseColor}) => {
	return (
		<div className="picker-box">
			{map(SIDEWAYS_COLORS, (colors, name) => {
				return (
					<div key={name} className="picker-color" onClick={()=>onChooseColor(name)}>
						<Pegsideways colors={colors} />
					</div>
				);
			})}
		</div>
	)
}

const Gameplay = (props) => {
	const {board} = props;
	return (
		<div>

			<div className="board">
				<div className="hidden-row">

				</div>
				{board.map((row, index)=>{
					return <Boardrow  key={index} rowindex={index} pegs={row.pegs} feedbackPegs={row.feedback} {...props}/>;
				})}
			</div>
		</div>
	)
};

export default Gameplay;
