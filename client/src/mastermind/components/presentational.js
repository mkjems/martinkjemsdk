import React from 'react';
import classNames from 'classnames'
import map from 'lodash.map';

import {COLORS, SIDEWAYS_COLORS, TOP_VIEW_COLORS} from '../script/constants.js'
import Hole from './Hole.js';
import PegIllu from './Peg.js';
import Pegsideways from './Pegsideways.js';
import SmallFeedbackPeg from './SmallFeedbackPeg.js';
import SmallFeedbackHole from './SmallFeedbackHole.js';

import SelectedHole from './SelectedHole';

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


const Peg = ({id, peg, onPegClick, isSelected}) => {
	let markup = '';
	if (peg == 'select' && isSelected) {
		markup = <SelectedHole />
	} else if(peg === 'select') {
		markup = <Hole type="svg-hole-animation" />;
	} else if (peg === 'none') {
		markup = <Hole type="svg-hole-normal"  />;
	} else if (peg !== 'none' && peg !== 'select') {
		markup = <PegIllu peg={peg} colors={TOP_VIEW_COLORS[peg]}/>;
	}
	return (
		<div className="peg" onClick={()=>onPegClick(id)}>
			{markup}
		</div>
	)
}



const Boardrow = ({
	showColorpicker,
	onChooseColor,
	rowindex,
	activeRow,
	pegs,
	feedbackPegs,
	onPegClick,
	selectedPeg}) => {
	return (
	<div>
		<div className="board">
			<div className="board-row">
				{pegs.map((val,index) => {
					const isSelected = ( (activeRow == rowindex) && (selectedPeg == index) );
					return (
						<Peg isSelected={isSelected} key={index} id={index} peg={val} onPegClick={onPegClick} />
					);
				})}
				<Feedback feedbackPegs={feedbackPegs} />
			</div>
		</div>
		{(activeRow == rowindex && showColorpicker) ? <Colorpicker onChooseColor={onChooseColor} />:null }
	</div>
	);
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
				<div className="hidden-row"></div>
			</div>
			{board.map((row, index)=>{
				return <Boardrow  key={index} rowindex={index} pegs={row.pegs} feedbackPegs={row.feedback} {...props}/>;
			})}
		</div>
	)
};

export default Gameplay;
