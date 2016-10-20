import React from 'react';

import {TOP_VIEW_COLORS} from '../script/constants.js'
import Hole from './Hole.js';
import PegIllu from './PegIllu.js';
import SelectedHole from './SelectedHole';


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

export default Peg;