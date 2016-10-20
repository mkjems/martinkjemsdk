import React from 'react';
import classNames from 'classnames'

const Checkmark = ({onSubmitRow, isActive})=> {
    const checkMarkClasses = classNames('picker-checkmark',{
        'picker-checkmark-active': isActive
    })
    return (
        <div className="picker-color" onClick={isActive ? onSubmitRow : ()=>{}}>
            <div className={checkMarkClasses}><span className="picker-checkmark-span" >✔︎</span></div>
        </div>
    )
};

export default Checkmark;