import React from 'react';

import Hiddencode from './Hiddencode';
import Boardrow from './Boardrow';

const Gameplay = (props) => {
    const {board, activeRow, secretCode, isCodeHidden} = props;
    return (
        <div>
            <Hiddencode secretCode={secretCode} isCodeHidden={isCodeHidden}/>
            {board.map((row, index)=>{
                return <Boardrow  key={index} rowindex={index} pegs={row.pegs} isActiveRow={(activeRow===index)} feedbackPegs={row.feedback} {...props}/>;
            })}
        </div>
    )
};

export default Gameplay;