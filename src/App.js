import React from 'react';
import './App.css';
import Question from './Question';
import questionData from './question-data.json';

function App() {

  return (
    <div className="App">
      <center>
        <h1>Jeopardy</h1>
      </center>
      <div className="board">
          {/* Column - 1 (HISTORY) */}
          <div className="column">
            <h1>History</h1>
            <Question
              clue={questionData[0].clue}
              answer={questionData[0].answer}
            />
            <Question
              clue={questionData[1].clue}
              answer={questionData[1].answer}
            />
            <Question
              clue={questionData[2].clue}
              answer={questionData[2].answer}
            />
          </div>
          {/* Column - 2 (SPORTS) */}
          <div className="column">
            <h1>History</h1>
            <Question
              clue={questionData[3].clue}
              answer={questionData[3].answer}
            />
            <Question
              clue={questionData[4].clue}
              answer={questionData[4].answer}
            />
            <Question
              clue={questionData[5].clue}
              answer={questionData[5].answer}
            />
          </div>
          {/* Column - 3 (MUSIC) */}
          <div className="column">
            <h1>History</h1>
            <Question
              clue={questionData[6].clue}
              answer={questionData[6].answer}
            />
            <Question
              clue={questionData[7].clue}
              answer={questionData[7].answer}
            />
            <Question
              clue={questionData[8].clue}
              answer={questionData[8].answer}
            />
          </div>
      </div>
    </div>
  );
}

export default App;
