import React from 'react';
import './App.css';
import Question from './Question';


function App() {

  return (
    <div className="App">
      <center>
        <h1>Jeopardy</h1>
      </center>
      <div className="board">
          <div className="column">
            <h1>History</h1>
            <Question
              clue='The first president of the US'
              answer='Who is George Washington?'
            />
            <Question
              clue='The first president of the US'
              answer='Who is George Washington?'
            />
            <Question
              clue='The first president of the US'
              answer='Who is George Washington?'
            />
          </div>
          <div className="column">
            <h1>History</h1>
            <Question
              clue='The first president of the US'
              answer='Who is George Washington?'
            />
            <Question
              clue='The first president of the US'
              answer='Who is George Washington?'
            />
            <Question
              clue='The first president of the US'
              answer='Who is George Washington?'
            />
          </div>
          <div className="column">
            <h1>History</h1>
            <Question
              clue='The first president of the US'
              answer='Who is George Washington?'
            />
            <Question
              clue='The first president of the US'
              answer='Who is George Washington?'
            />
            <Question
              clue='The first president of the US'
              answer='Who is George Washington?'
            />
          </div>
      </div>
    </div>
  );
}

export default App;
