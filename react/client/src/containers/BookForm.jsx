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
    return(
      <form className="book-form" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Author" value={this.state.author}
          onChange={this.handleAuthorChange}/>
        <input type="text" placeholder="Title" value={this.state.title} onChange={this.handleTitleChange}/>
        <input type="submit" value="Post"/>
      </form>
    )
  }

}

export default BookForm;