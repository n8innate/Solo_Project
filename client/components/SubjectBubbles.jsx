import React from 'react';


//  >>> SHOULD FETCH & DISPLAY ALL AVAILABLE SUBJECTS  <<<
//  >>> SHOULD ALLOW FOR THE CREATION OF A NEW SUBJECT  <<<
const SubjectBubbles = ({
  info
}) => {
  const {
    name
  } = info;

  
  return(
    <div id='subject-bubbles'>
      <h5 className="subName">{name}</h5>
    </div>
  )


}

// module.exports = SubjectBubbles;
export default SubjectBubbles;