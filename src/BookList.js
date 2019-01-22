import React, { Component } from "react";
import { Link } from "react-router-dom";

// Components
import Loading from "./Loading";
import SearchBar from "./SearchBar";
import BookTable from "./BookTable";

import bookStore from "./stores/BookStore";

import { observer } from "mobx-react";

class BookList extends Component {
  render() {
    console.log(bookStore.filteredBooks);
    const bookColor = this.props.match.params.bookColor;
    let books = bookStore.filteredBooks;
    let allBooksButton;

    if (bookColor) {
      books = bookStore.filterBooksByColor(bookColor);
      allBooksButton = (
        <Link to="/books">
          <button className="btn">All Books</button>
        </Link>
      );
    }

    return bookStore.loading ? (
      <Loading />
    ) : (
      <div>
        <h3>Books</h3>
        <SearchBar store={bookStore} />
        {allBooksButton}
        <BookTable books={books} />
      </div>
    );
  }
}

export default observer(BookList);
