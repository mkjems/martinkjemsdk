import React from 'react';
import map from 'lodash.map';

import {SIDEWAYS_COLORS} from '../script/constants'
import Pegsideways from './Pegsideways';
import Checkmark from './Checkmark';


const Colorpicker = ({onChooseColor, onSubmitRow, isCompleteRow}) => {
    return (
        <div className="picker-box">
            {map(SIDEWAYS_COLORS, (colors, name) => {
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