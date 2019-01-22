import React, { Component } from "react";
import BookRow from "./BookRow";

class BookTable extends Component {
  render() {
    const bookRows = this.props.books.map(
      book => book && <BookRow key={book.title} book={book} />
    );
    return (
      <table className="mt-3 table">
        <thead>
          <tr>
            <th />
            <th>Name</th>
            <th>Authors</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>{bookRows}</tbody>
      </table>
    );
  }
}

export default BookTable;
