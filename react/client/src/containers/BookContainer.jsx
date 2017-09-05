import React from 'react';
import BookList from '../components/BookList.jsx';
import Book from '../components/Book.jsx';

class BookContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    }
  }

  componentDidMount() {
    const url = 'http://localhost:3000/books';
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.onload = () => {
      if(request.status === 200) {
        const jsonString = request.responseText;
        const data = JSON.parse(jsonString);
        this.setState({ books: data });
      }
    }
    request.send();
  }

  render() {
    return (
      <div>
        <h2>Book Container</h2>
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default BookContainer;