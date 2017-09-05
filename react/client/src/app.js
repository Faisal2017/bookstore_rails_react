import React from 'react';
import ReactDOM from 'react-dom';
import BookContainer from './containers/BookContainer.jsx';

window.onload = function(){
  ReactDOM.render(
    <BookContainer />,
    document.getElementById('app')
  );
}
