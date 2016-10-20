import React from 'react';

import Peg from './Peg';
import Feedback from './Feedback';
import Gaveup from './Gaveup';
import Won from './Won';
import Lost from './Lost';
import Colorpicker from './Colorpicker';


const Boardrow = ({
    isCompleteRow,
    onChooseColor,
    onPegClick,
    onSubmitRow,
    isActiveRow,
    showColorpicker,
    rowindex,
    activeRow,
    pegs,
    feedbackPegs,
    selectedPeg,
    gameStatus,
    onResetAll
}) => {
    return (
    <div>
        {(activeRow == rowindex && gameStatus=='gave_up') ? <Gaveup onResetAll={onResetAll}/> : null}
        <div className="board">
            <div className="board-row">
                {pegs.map((val,index) => {
                    const isSelected = ( (activeRow == rowindex) && (selectedPeg == index) );
                    return (
                        <Peg isSelected={isSelected} key={index} id={index} peg={val} onPegClick={isActiveRow ? onPegClick: ()=>{}} />
                    );
                })}
                <Feedback feedbackPegs={feedbackPegs} />
            </div>
        </div>
        {(activeRow == rowindex && showColorpicker) ? <Colorpicker isCompleteRow={isCompleteRow} onSubmitRow={onSubmitRow} onChooseColor={onChooseColor} />:null }
        {(activeRow == rowindex && gameStatus=='won') ? <Won onResetAll={onResetAll}/> : null}
        {(activeRow == rowindex && gameStatus=='lost') ? <Lost onResetAll={onResetAll}/> : null}
    </div>
    );
};

export default Boardrow;