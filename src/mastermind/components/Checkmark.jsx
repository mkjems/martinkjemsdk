import React from 'react';

const Checkmark = ({onSubmitRow, isActive})=> {
    const checkMarkClasses = isActive ? 'picker-checkmark picker-checkmark-active' : 'picker-checkmark';
    return (
        <div className="picker-color" onClick={isActive ? onSubmitRow : ()=>{}}>
            <div className={checkMarkClasses}><span className="picker-checkmark-span" >✔︎</span></div>
        </div>
    )
};

export default Checkmark;
