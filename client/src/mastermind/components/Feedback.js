import React from 'react';

import SmallFeedbackPeg from './SmallFeedbackPeg.js';
import SmallFeedbackHole from './SmallFeedbackHole.js';


const FeedbackPeg = ({pegType="none"}) => {
    return (
        <div className="feedback-item">
            {pegType==='red' ? (<SmallFeedbackPeg type="red" />):null}
            {pegType==='white' ? (<SmallFeedbackPeg type="white" />):null}
            {pegType==='none' ? (<SmallFeedbackHole />):null}
        </div>
    )
};

const Feedback = ({feedbackPegs}) => {
    return (
        <div className="feedback">
            {feedbackPegs.map((type, index) => {
                return <FeedbackPeg key={index} pegType={type}/>
            })}
        </div>
    )
};

export default Feedback;