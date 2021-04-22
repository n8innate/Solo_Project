import React from 'react';


const DevSubject = ({
  info
}) => {
  const {
    name, dev_type, instructions
  } = info;

  return (
    <article className="card charCard">
      <div className="subHeadContainer">
        <h5 className="subName">{name}</h5>
      </div>
      <ul className="subDetailsList">
        <li className="subDetail">Dev Type: {dev_type}</li>
        <li className="subDetail">Instructions: {instructions}</li>
      </ul>
    </article>
  );
}


export default DevSubject;