import React from 'react';
import QuestionList from './QuestionList.js';

const App = props => {
  let data = props.data.map(question => {
    return(
      <QuestionList
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
