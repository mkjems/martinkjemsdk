import React from 'react';

const Iconbusinessman = require('../assets/businessman_in_circle.svg');

const Contact = ({onContactClick, showContact}) => {
	return (
		<section className="sec_01">
		    <div className="section-illu">
		        <Iconbusinessman className='illu-svg' />
		    </div>
		    <div className="section-text">
		        <h2>Web developer</h2>
		        {(showContact)
		        	? <p>Phone: (+45) 51 24 52 65<br /><br /></p>
		        	: <p >Im a web developer with many years of experience</p>
		        }
		        <button className="positive" onClick={onContactClick}>Contact information</button>

		    </div>
	    </section>
	)
}

export default Contact