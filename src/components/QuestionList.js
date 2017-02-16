import React from 'react';

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {questionClickedID: null};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    let questionID = id;
    if(id === this.state.questionClickedID) {
      questionID = null;
    }

    this.setState({questionClickedID: questionID});
  }

  render(){

    let onQuestionClick = () =>
    this.handleClick(this.props.id);

    return (
      <ul>
        <div clasName="test">
          <div className="small-4 columns">
            <i className="fa fa-plus-square" aria-hidden="true" key={this.props.id} onClick={onQuestionClick}></i>
            <div className={this.props.id}>
              {this.props.question}
              {this.props.answer}
            </div>
          </div>
        </div>
      </ul>
    );
  }

  //javascript i click box open text
  /*
  $('.test').click(function(){
    if ($('.script').is(':visible')) {
      $('.script').hide();
    } else {
      $('.script').show();
    }
  })
  */

};

export default QuestionList;
