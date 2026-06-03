import React from 'react';

const Pegsideways = ({colors}) => {

	return (
		<svg viewBox="0 0 99.828297 114.93159" className="sidePeg">
			<g transform="translate(-37.84 -859.206)">
				<path d="M71.116 900.59h33.276v73.547H71.116z" fill={colors.stem}/>
				<path d="M86.67 908.108h17.622v65.863H86.67z" fill={colors.self_shadow}/>
				<path d="M71.123 907.87c2.692 0 33.31.238 33.31.238l-.223 33.058s-7.227-25.484-33.028-27.624z" fill={colors.cast_shadow} fillOpacity=".459" fillRule="evenodd"/>
				<path d="M37.84 907.984a49.914 48.778 0 0 1 25.22-42.39 49.914 48.778 0 0 1 50.176.447 49.914 48.778 0 0 1 24.424 42.833l-49.906-.89z" fill={colors.hat}/>
				<ellipse ry="4.519" rx="4.729" cy="877.19" cx="70.976" fill={colors.highlight}/>
			</g>
		</svg>
	)
}

export default Pegsideways