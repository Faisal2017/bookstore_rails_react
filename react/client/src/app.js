import React from 'react';
import ReactDOM from 'react-dom';
import BookContainer from './containers/BookContainer.jsx';

window.onload = function(){
  ReactDOM.render(
    // <h1> App Started </h1>,
    <BookContainer />,
    document.getElementById('app')
  );
}
