import React from 'react';
import './App.css';
import Question from './Question';
import questionData from './question-data.json';

let topics = questionData.topics;
let questions = questionData.questions;


function App() {

  return (
    <div className="App">
      <center>
        <h1>Jeopardy</h1>
      </center>
      <div className="board">
          {/* Column - 1 (HISTORY) */}
          <div className="column">
            <h1>{topics[0]}</h1>
            <Question
              clue={questions[0].clue}
              answer={questions[0].answer}
            />
            <Question
              clue={questions[1].clue}
              answer={questions[1].answer}
            />
            <Question
              clue={questions[2].clue}
              answer={questions[2].answer}
            />
          </div>
          {/* Column - 2 (SPORTS) */}
          <div className="column">
            <h1>{topics[1]}</h1>
            <Question
              clue={questions[3].clue}
              answer={questions[3].answer}
            />
            <Question
              clue={questions[4].clue}
              answer={questions[4].answer}
            />
            <Question
              clue={questions[5].clue}
              answer={questions[5].answer}
            />
          </div>
          {/* Column - 3 (MUSIC) */}
          <div className="column">
            <h1>{topics[2]}</h1>
            <Question
              clue={questions[6].clue}
              answer={questions[6].answer}
            />
            <Question
              clue={questions[7].clue}
              answer={questions[7].answer}
            />
            <Question
              clue={questions[8].clue}
              answer={questions[8].answer}
            />
          </div>
      </div>
    </div>
  );
}

export default App;
