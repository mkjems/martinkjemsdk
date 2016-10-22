import React from 'react';

const PegIllu = ({isSelected=false, colors} ) => {

    return (
		<svg  viewBox="0 0 269.15568 267.25497" className="pegIllu">
		    {isSelected ? <ellipse cx="134.578" cy="133.627" rx="129.578" ry="128.627" fill="none" stroke="#cecece" strokeWidth="10" /> : null}
		    <circle r="102.143" cy="133.627" cx="134.577" fill={colors.hat}/>
		    <circle cx="100.506" cy="90.627" r="10.357" fill={colors.highlight} fillOpacity=".554"/>
		    <path d="M40.448 172.318a102.143 102.143 0 0 0 94.129 62.739A102.143 102.143 0 0 0 236.72 132.914a102.143 102.143 0 0 0-31.584-73.691 102.143 102.143 0 0 1 1.07 2.392 102.143 102.143 0 0 1 3.22 9.69 102.143 102.143 0 0 1 2.235 9.96 102.143 102.143 0 0 1 1.231 10.137 102.143 102.143 0 0 1 .256 7.225 102.143 102.143 0 0 1-.51 10.197 102.143 102.143 0 0 1-1.525 10.096 102.143 102.143 0 0 1-2.528 9.892 102.143 102.143 0 0 1-3.5 9.592 102.143 102.143 0 0 1-4.441 9.194 102.143 102.143 0 0 1-5.336 8.703 102.143 102.143 0 0 1-6.18 8.129 102.143 102.143 0 0 1-6.959 7.47 102.143 102.143 0 0 1-7.672 6.739 102.143 102.143 0 0 1-8.304 5.94 102.143 102.143 0 0 1-8.856 5.08 102.143 102.143 0 0 1-9.32 4.17 102.143 102.143 0 0 1-9.69 3.22 102.143 102.143 0 0 1-9.96 2.234 102.143 102.143 0 0 1-10.137 1.23 102.143 102.143 0 0 1-7.225.257 102.143 102.143 0 0 1-10.197-.51 102.143 102.143 0 0 1-10.096-1.526 102.143 102.143 0 0 1-9.892-2.525 102.143 102.143 0 0 1-9.592-3.502 102.143 102.143 0 0 1-9.193-4.441 102.143 102.143 0 0 1-8.704-5.336 102.143 102.143 0 0 1-8.129-6.18 102.143 102.143 0 0 1-4.755-4.432z" fill={colors.self_shadow} fillOpacity=".8"/>
		</svg>
    )
}

export default PegIllu
