import React from 'react';

class BookForm extends React.Component{
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      author: '',
      title: '',
      genre: '',
      quantity: 0
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    let genre_id = document.getElementById("genre_select").value
    let author_id = document.getElementById("author_select").value
    let title = document.getElementById("title").value
    let quantity = document.getElementById("quantity").value

    let bookData = {
      genre_id: genre_id,
      author_id: author_id,
      title: title,
      quantity: quantity
    }
    const url = 'http://localhost:3000/books';
    const request = new XMLHttpRequest();
    request.open('POST', url);
    request.setRequestHeader("Content-Type", "application/json")
    request.withCredentials = true

    request.onload = () => {
      if(request.status === 200) {
        const jsonString = request.responseText;
        const data = JSON.parse(jsonString);
        console.log(data)
      }
    }
    console.log(JSON.stringify(bookData))
    request.send(JSON.stringify(bookData));
  }

  render() {
    const authorOptions = this.props.bookDetails.map((book) => {
      return (
        <option key={book.author_id} value={book.author.name}> {book.author.name} </option>
        )
    })

    const genreOptions = this.props.bookDetails.map((book) => {
      return (
        <option key={book.genre_id} value={book.genre.name}> {book.genre.name} </option>
        )
    })

    return(
      <form className="book-form" onSubmit={this.handleSubmit} method="POST">

        <select id="author_select" type="text" placeholder="Author" >
        { authorOptions }
        </select>

        <select id="genre_select" type="text" placeholder="Genre">
        { genreOptions }
        </select>

        <input id="title" type="text" placeholder="Title" />

        <input id="quantity" type="number" placeholder="Quantity"/>
        
        <input type="submit" value="Post"/>
      </form>
    )
  }

}

export default BookForm;