import React from 'react';
import classnames from 'classnames';

import Hiddencode from './Hiddencode';
import Boardrow from './Boardrow';

const Gameplay = (props) => {
    const {board, activeRow, secretCode, isCodeHidden, onGiveUp, isRevealHidden} = props;
    return (
        <div>
            <Hiddencode {...props}/>
            {board.map((row, index)=>{
                return <Boardrow
                	key={index}
                	rowindex={index}
                	pegs={row.pegs}
                	isActiveRow={(activeRow===index)}
                	feedbackPegs={row.feedback}
                	{...props} />;
            })}
            <div className={classnames('board', 'bottom-part')} >
	        { !isRevealHidden ? <button onClick={onGiveUp} >Give up</button> : null}
	        </div>
        </div>
    )
};

export default Gameplay;