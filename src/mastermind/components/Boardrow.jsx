import React from 'react';

import Peg from './Peg';
import Feedback from './Feedback';
import Gaveup from './Gaveup';
import Won from './Won';
import Lost from './Lost';
import Colorpicker from './Colorpicker';

const Boardrow = (props) => {
    const {isActiveRow, onPegClick, rowindex, gameStatus, showColorpicker, pegs, selectedPeg} = props;
    const gaveUp = (gameStatus === 'gave_up');
    return (
    <div>
        <div className="board">
            <div className="board-row">
                {pegs.map((val,index) => {
                    const isSelected = ( isActiveRow && (selectedPeg == index) );
                    return (
                        <Peg
                            isActiveRow={isActiveRow}
                            gaveUp={gaveUp}
                            isSelected={isSelected}
                            key={index}
                            id={index}
                            peg={val}
                            onPegClick={(isActiveRow && !gaveUp) ? onPegClick: ()=>{}}
                        />
                    );
                })}
                <Feedback {...props} />
            </div>
        </div>
        {(isActiveRow && gameStatus=='gave_up') ? <Gaveup {...props} /> : null}
        {(isActiveRow && showColorpicker) ? <Colorpicker {...props} />:null }
        {(isActiveRow && gameStatus=='won') ? <Won {...props} /> : null}
        {(isActiveRow && gameStatus=='lost') ? <Lost {...props} /> : null}
    </div>
    );
};

export default Boardrow;