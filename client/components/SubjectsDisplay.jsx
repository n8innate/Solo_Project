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
      <div id='subject-display'>
        <h1>Select Dev Subjects</h1>
        <SubjectBubbles />
      </div>
    )
  }
}




// module.exports = SubjectsDisplay;
export default SubjectsDisplay;