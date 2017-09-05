import React from 'react';

class BookForm extends React.Component{
  constructor(props) {
    super(props);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      author: '',
      title: ''
    };
  }

  handleAuthorChange(event) {
    this.setState({author: event.target.value});
  }

  handleTitleChange(event) {
    this.setState({title: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const author = this.state.author.trim();
    const title = this.state.title.trim();
    if (!title || !author) {
      return;
    }
    this.props.onBookSubmit({author: author, title: title});
    this.setState({author: '', title: ''}); 
  }

  render() {
    const authorOptions = this.props.bookDetails.map((book) => {
      return (
        <option key={book.author_id} value={book.author.name}> {book.author.name} </option>
        )
    })

    return(
      <form className="book-form" onSubmit={this.handleSubmit} method="POST">

        <select type="text" placeholder="Author" value={this.state.author} >
        { authorOptions }
        </select>

        <input type="text" placeholder="Title" value={this.state.title} onChange={this.handleTitleChange}/>
        
        <input type="submit" value="Add"/>
      </form>
    )
  }

}

export default BookForm;