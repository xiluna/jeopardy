import React, { useState } from 'react';

function Question(props) {
    const [ showAnswer, setShowAnswer ] = useState(false);

    if (!showAnswer) {
        return (
            <div
                className='question'
                onClick={() => setShowAnswer(true)}
            >
                {props.clue}
            </div>
        );
    }

    return (
        <div
            className='question'
        >
            {props.answer}
        </div>
    );

}

export default Question;
