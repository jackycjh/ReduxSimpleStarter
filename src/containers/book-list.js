import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li 
          key={book.title} 
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
            {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
};

function mapStateToProps(state) {
  // What returned from here
  // will be props of BookList
  return {
    books: state.books
  };
}

// Anything returned here will end up as props of BookList container.
function mapDispatchToProps(dispatch) {
  // Whenever selectBook() is called, the result will be dispatched to all reducers.
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}


// Promote BookList from component to container:
// it needs to know about dispatch method, selectBook(), as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);