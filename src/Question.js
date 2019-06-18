import React, { useState } from 'react';

function Question(props) {
  const [display, setDisplay] = useState(props.pointValue);

  function questionClicked() {
      if(display === props.pointValue){
          setDisplay(props.questionText);
      } else if (display === props.questionText){
          setDisplay(props.answer);
      } else {
          setDisplay("")
      }
  };

  return (
    <div
        className="question"
        onClick={questionClicked}
    >
        {display}
    </div>
  );
}

export default Question;
