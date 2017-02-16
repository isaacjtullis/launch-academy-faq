import React from 'react';
import QuestionList from './QuestionList.js';

const App = props => {
  debugger
  return (
    <div className="body">
      <div className="header"><h1>We are here to help</h1></div>
      <QuestionList questions={props.data}/>
    </div>
  );
}
export default App;
