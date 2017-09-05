import React from 'react';

class Book extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <h4>{ this.props.author }</h4>
        {this.props.children}
      </div>
    );
  }
}

export default Book;