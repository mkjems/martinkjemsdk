import React from 'react';

const Iconmastermind = require('../assets/mastermind_in_circle.svg');
import Counter from './Counter';
import Contact from './Contact';

const Restofpage = (props) => {
    console.log(props);
    return (
        <div>
            <header>
                <div className="jumbo">
                    <h1 className="jumbo-title">Martins page</h1>
                </div>
            </header>
            <div className="container">
                <section className="sec_02">
                    <div className="section-illu">
                        <Iconmastermind className='illu-svg' />
                    </div>
                    <div className="section-text">
                        <h2>Play Mastermind</h2>
                        <p>
                            I like to build stuff for fun with web technologies.<br />
                            This is a version of the old classic Mastermind.<br />
                            It's built with React.&nbsp;<a href="/mastermind/">Try it out!</a>
                        </p>
                    </div>
                </section>
                <Contact {...props} />
            </div>
        </div>
    );
}

export default Restofpage;
