import React from 'react';

const Intro = ({onStartGame})=> {

    return (
        <div className="board" >
            <h1>Mastermind</h1>
            <p>Rules</p>
            <button onClick={onStartGame}>Start game</button>
        </div>
    )
};

export default Intro;