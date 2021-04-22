import React, { Component } from 'react';


//  >>> SHOULD FETCH & DISPLAY ALL AVAILABLE SUBJECTS  <<<
//  >>> SHOULD ALLOW FOR THE CREATION OF A NEW SUBJECT  <<<
class SubjectCreator extends Component {

  constructor(props) {
    super(props);
  };

  render(){
    return(
      <div id='subject-creator'>
        <h4>Start a new Subject?</h4>
      </div>
    )
  }
}





// module.exports = SubjectCreator;
export default SubjectCreator;