import React, { Component } from 'react';
import SubjectContainer from './SubjectContainer';
import SubjectsDisplay from '../components/SubjectsDisplay';

//  >>> SHOULD FETCH & PASS PROPS TO SUBJECTS-DISPLAY <<<
class MainContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className='subject-container'>
        <h3>What kind of project would you like to build?</h3>
        <SubjectsDisplay />
        <SubjectContainer />
      </div>
    )
  }

}


module.exports = MainContainer;