import React from 'react';
import Question from './Question';

function Column(props) {
    return (
        <div className="column">
            <h1 className="topic">
                {props.topic}
            </h1>
            {
                props.questions.map((question, i) => {
                    return (
                        <Question
                            key={question.clue}
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
