import React from 'react';

import Feedback from './Feedback';
import Peg from './Peg';

const Rules = () => {
    return (
        <div>
            <p>The aim of the game is to guess a secret code of 4 colors.</p>
            <div className="intro-explain">
                {['yellow', 'red'].map((val, index)=>{
                    return <Peg key={index} id={index} peg={val} />
                })}
            </div>
            <p>The colors are drawn from a pool of 8 colors, each color can only appear once in the code.</p>
            <p>After each guess, you will be given feedback in the form of some red and white dots</p>
            <div className="intro-explain">
                <Feedback feedbackPegs={['white','none','none','none']} />
            </div>
            <p>A white dot means one of the colors  has the right color but not the right position.</p>
            <div className="intro-explain">
                <Feedback feedbackPegs={['red','none','none','none']} />
            </div>
            <p>A red dot means one of the colors has the right color and the right position.</p>
            <p>You have 10 attempts to solve the code</p>
        </div>
    );
};

const Intro = ({onStartGame, onToggleRules, isRulesHidden})=> {
    return (
        <div className="board" >
            <h1>Mastermind</h1>
            <button onClick={onStartGame}>Start game</button>
            <button onClick={onToggleRules}>
                {isRulesHidden ? 'Show' : 'Hide'} Rules
            </button>
            {isRulesHidden ? null : <Rules />}
        </div>
    );
};

export default Intro;