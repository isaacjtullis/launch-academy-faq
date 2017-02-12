import React from 'react';
import Question from './Question.js';

const App = props => {
  let data = props.data.map(question => {
    return(
      <Question
        id={question.id}
        question={question.question}
        answer={question.answer}
      />
    );
  });

  return(
    <ul>
      {data}
    </ul>
  )
};

export default App;
