import React from 'react';
import Question from './Questions';

function Column(props) {
    return (
        <div className="question">
            <h1>{props.topic}</h1>
            {
                props.questions.map(question => {
                    return (
                        <Question
                            clue={question.clue}
                            answer={question.answer}
                        />
                    );
                })
            }
        </div>
    );
}

export default Column;
