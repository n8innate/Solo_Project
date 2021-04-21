import React, { Component } from 'react';
import SubjectBubbles from '../components/SubjectBubbles';


//  >>> SHOULD FETCH & DISPLAY ALL AVAILABLE SUBJECTS  <<<
//  >>> SHOULD ALLOW FOR THE CREATION OF A NEW SUBJECT  <<<
class SubjectsDisplay extends Component {

  constructor(props) {
    super(props);
  };

  render(){
    return(
      <div>
        <SubjectBubbles />
      </div>
    )
  }
}




module.exports = SubjectsDisplay;