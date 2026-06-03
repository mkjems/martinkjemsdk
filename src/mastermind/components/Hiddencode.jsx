import React from 'react'

import Peg from './Peg';

const Hiddencode = ({secretCode, isCodeHidden}) => {

	return (
        <div className="board board__secret">
        	<div className="cover">
	            <div className="hidden-row">
	            	{secretCode.map((val, index)=>{
	            		return <Peg key={index} id={index} peg={val} />
	            	})}
	            </div>
	            <div className={isCodeHidden ? 'cover-slider cover-slider_closed' : 'cover-slider'} ></div>
	        </div>
        </div>
	);
};

export default Hiddencode;
