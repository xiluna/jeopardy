import React from 'react';
import Column from './Column';

function Board(props) {

    let topics = props.questionData.topics;
    let questions = props.questionData.questions;

    return(
        <div className='board'>
            {
                topics.map(topic => {
                    let topicQuestions = getTopicQuestions(topic, questions);

                    return (
                        <Column
                            topic={topic}
                            questions={topicQuestions}
                        />
                    );
                })
            }
        </div>
    );
}

function getTopicQuestions(topic, questions) {
    return questions.filter(question => question.topic === topic);
}

export default Board;