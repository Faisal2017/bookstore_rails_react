import React from 'react';

import Book from './Book.jsx';

class BookList extends React.Component {

  constructor (props) {
    super(props);
  }

  render() {
    var bookComponents = this.props.books.map(function(book) {
      return (
        <Book key={book.id} author={book.author.name}> 
          <p>Title : {book.title}</p>
          <p>Quantity : {book.quantity} </p>
        </Book>
        )
    })
    return (
    <div>
    { bookComponents }
    </div>
    )
  }

}

export default BookList;