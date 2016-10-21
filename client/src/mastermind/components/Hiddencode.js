import React from 'react'

import Peg from './Peg';
import classNames from 'classnames';

const Hiddencode = ({secretCode, isCodeHidden, onGiveUp, isRevealHidden}) => {

	return (
        <div className={classNames('board', 'board__secret')}>
        	<div className="cover">
	            <div className="hidden-row" className={classNames('hidden-row')}>
	            	{secretCode.map((val, index)=>{
	            		return <Peg key={index} id={index} peg={val} />
	            	})}
	            	{!isRevealHidden ? <div onClick={onGiveUp} className={classNames('peg','cover-giveup')} >?</div>: null}
	            </div>
	            <div className={classNames('cover-slider', {'cover-slider_closed': isCodeHidden})} ></div>
	        </div>
        </div>
	);
};

export default Hiddencode;