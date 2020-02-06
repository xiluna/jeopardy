import React from 'react';
import './App.css';
import Board from './Board';
import questionData from './question-data.json';

function App() {
  return (
    <div className="App">
      <center>
        <h1>Jeopardy</h1>
      </center>
      <Board
        questionData={questionData}
      />
    </div>
  );
}

export default App;
