import React from 'react';

import {SIDEWAYS_COLORS} from '../script/constants'
import Pegsideways from './Pegsideways';
import Checkmark from './Checkmark';


const Colorpicker = ({onChooseColor, onSubmitRow, isCompleteRow}) => {
    return (
        <div className="picker-box">
            {Object.keys(SIDEWAYS_COLORS).map((name) => {
                const colors = SIDEWAYS_COLORS[name];
                return (
                    <div key={name} className="picker-color" onClick={()=>onChooseColor(name)}>
                        <Pegsideways colors={colors} />
                    </div>
                );
            })}
            <div className="picker-color">

            </div>
            <Checkmark onSubmitRow={onSubmitRow} isActive={isCompleteRow} />
        </div>
    )
}

export default Colorpicker;
