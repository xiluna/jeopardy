import React from 'react';
import logo from './logo.svg';
import './App.css';
import Question from "./Question.js"

function App() {

  return (
    <div className="App">
        <h1> Jeopardy </h1>
        <div className="board">
            <div className="column">
                <p>CAPITALS</p>
                <Question
                    questionText={"This is the capital of NY"}
                    pointValue={100}
                    answer={"What is Albany?"}
                />
                <Question
                    questionText={"This is the capital of France"}
                    pointValue={100}
                    answer={"What is Paris?"}
                />
                <Question
                    questionText={"This is the Capital of Mexico"}
                    pointValue={100}
                    answer={"What is Mexico City?"}
                />
            </div>
            <div className="column">
                <p>APPLE</p>
                <Question
                    questionText={"These can be used to listen to music without wires?"}
                    pointValue={100}
                    answer={"What are air pods?"}
                />
                <Question
                    questionText={"Before the iPhone people used these to listen to mp3s"}
                    pointValue={100}
                    answer={"What is the iPod?"}
                />
                <Question
                    questionText={"This early Apple computer got is name from a type of apple"}
                    pointValue={100}
                    answer={"What is the Macintosh?"}
                />
            </div>
            <div className="column">
                <p>NY, NY</p>
                <Question
                    questionText={"This large statue gets its green color from rusting copper"}
                    pointValue={100}
                    answer={"What is the Statue of Liberty?"}
                />
                <Question
                    questionText={"There are this many buroughs in NY"}
                    pointValue={100}
                    answer={"What are 5 buroughs?"}
                />
                <Question
                    questionText={"This is a sweet nickname for NYC"}
                    pointValue={100}
                    answer={"What is The Big Apple?"}
                />
            </div>
        </div>
    </div>
  );
}

export default App;
