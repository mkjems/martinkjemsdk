import React from 'react';

const Iconbusinessman = require('../assets/businessman_in_circle.svg');

const ContactInfo = () => {
	return (
		<p>
			Phone: <a href="tel:(+45) 51 24 52 65">(+45) 51 24 52 65</a><br />
			LinkedIn : <a href="https://www.linkedin.com/in/martin-kjems-39a9a6">martin-kjems-39a9a6</a><br />
		</p>

	);
}

const Contact = ({onContactClick, showContact}) => {
	return (
		<section className="sec_01">
		    <div className="section-illu">
		        <Iconbusinessman className='illu-svg' />
		    </div>
		    <div className="section-text">
		        <h2>Web developer</h2>
		        {(showContact)
		        	? <ContactInfo />
		        	: <p >Im a web developer with many years of experience</p>
		        }
		        <button className="positive" onClick={onContactClick}>Contact information</button>

		    </div>
	    </section>
	)
}

export default Contact