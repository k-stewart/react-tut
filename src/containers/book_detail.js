import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    var book = this.props.book;

    if (!book) {
      return <div><h2>Pls select book</h2></div>
    }

    return (
      <div>
        <h3>Details for {book.title}</h3>
        <div>{book.pages} pages: {book.comments}</div>
      </div>
    )
  };
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
