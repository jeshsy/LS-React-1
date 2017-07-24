/*eslint no-unused-vars: "off"*/
import React from 'react';
import { render } from 'react-dom';
import ToDoForm from './components/ToDoForm';

require('!style-loader!css-loader!sass-loader!./index.scss');

const App = () => {
  return (
    <ToDoForm />)
}

render(<App />, document.getElementById('root'));

// render(<div> Hello from React </div>, document.getElementById('root'));