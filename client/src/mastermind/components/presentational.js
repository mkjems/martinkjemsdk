import React from 'react';
import classNames from 'classnames'
import map from 'lodash.map';

import {COLORS, SIDEWAYS_COLORS, TOP_VIEW_COLORS} from '../script/constants.js'
import Hole from './Hole.js';
import PegIllu from './Peg.js';
import Pegsideways from './Pegsideways.js';
import SmallFeedbackPeg from './SmallFeedbackPeg.js';
import SmallFeedbackHole from './SmallFeedbackHole.js';

const FeedbackPeg = ({pegType="none"}) => {
	return (
		<div className="feedback-item">
			{pegType==='red' ? (<SmallFeedbackPeg type="red" />):null}
			{pegType==='white' ? (<SmallFeedbackPeg type="white" />):null}
			{pegType==='none' ? (<SmallFeedbackHole />):null}
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
