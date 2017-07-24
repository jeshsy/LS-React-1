import React from 'react';
import Buttons from './Buttons'

const ToDo = (props) => {
  return (
    <div>
  {props.data.map((name, index) => {
    return <div key={'div ' + index}>
    <h1
    key={'Todo ' + index}>
    {name}</h1>
    <Buttons key={'button ' + index}/>
    </div>
  })}
    </div>)
};

export default ToDo;