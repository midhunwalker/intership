import React from 'react';

function Welcome(props) {
  return ( 
    <div>
    <Welcome name="Midhun" />
    <Welcome name="React Developer" />
    <Welcome name="From Palakkad" />
  
  <h1>Hello, {props.name}!</h1>
  </div> );
}

export default Welcome;
