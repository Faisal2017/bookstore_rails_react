import React from 'react';
import BookList from '../components/BookList.jsx';
import Book from '../components/Book.jsx';

import BookForm from './BookForm.jsx'

class BookContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      genres: [],
      authors: []
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

    const url2 = 'http://localhost:3000/genres';
    const request2 = new XMLHttpRequest();
    request2.open('GET', url2);

    request2.onload = () => {
      if(request2.status === 200) {
        const jsonString = request2.responseText;
        const data2 = JSON.parse(jsonString);
        console.log(data2)
        this.setState({ genres: data2 });
      }
    }
    request2.send();

    const url3 = 'http://localhost:3000/authors';
    const request3 = new XMLHttpRequest();
    request3.open('GET', url3);

    request3.onload = () => {
      if(request3.status === 200) {
        const jsonString = request3.responseText;
        const data3 = JSON.parse(jsonString);
        console.log(data3)
        this.setState({ authors: data3 });
      }
    }
    request3.send();
    
  }

  render() {
    return (
      <div>
        <h2>Add Books </h2>
        <BookForm bookDetails={this.state.books} genreDetails={this.state.genres} authorDetails={this.state.authors} />
        <h2>Available Books</h2>
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default BookContainer;