import React from 'react';

const Question = props => {

  //javascript i click box open text

  return (
    <ul>
      <div className="small-4 columns">
        <i className="fa fa-plus-square" aria-hidden="true"></i>
        {props.id}
        {props.question}
        {props.answer}
      </div>
    </ul>
  );
};

export default Question;
