import React from 'react';

import {TOP_VIEW_COLORS} from '../script/constants.js'
import Hole from './Hole.js';
import PegIllu from './PegIllu.js';
import SelectedHole from './SelectedHole';

const Peg = ({id, peg, onPegClick, isSelected, isActiveRow}) => {
    let markup = '';
    if (peg == 'select' && isSelected) {
        markup = <Hole isSelected="true" isActiveRow={isActiveRow} />
    } else if(peg === 'select') {
        markup = <Hole isActiveRow={isActiveRow}/>;
    } else if (peg === 'none') {
        markup = <Hole />;
    } else if (peg !== 'none' && peg !== 'select') {
        markup = <PegIllu peg={peg} colors={TOP_VIEW_COLORS[peg]} isSelected={isSelected} />;
    }
    return (
        <div className="peg" onClick={()=>onPegClick(id)}>
            {markup}
        </div>
    )
}

export default Peg;