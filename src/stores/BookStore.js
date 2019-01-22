import { decorate, observable, computed } from "mobx";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com"
});

class BookStore {
  constructor() {
    this.books = [];
    this.loading = true;
    this.query = "";
  }

  fetchBooks() {
    return instance
      .get("/api/books/")
      .then(res => res.data)
      .then(books => {
        this.books = books;
        this.loading = false;
      })
      .catch(err => console.error(err));
  }

  get filteredBooks() {
    return this.books.filter(book =>
      `${book.title}`.toLowerCase().includes(this.query.toLowerCase())
    );
  }

  filterBooksByColor(bookColor) {
    return this.books.filter(book => book.color === bookColor);
  }

  getBookById(Id) {
    return this.books.find(book => +book.id === +Id);
  }
}

decorate(BookStore, {
  books: observable,
  loading: observable,
  query: observable,
  filteredBooks: computed
});

const bookStore = new BookStore();
bookStore.fetchBooks();

export default bookStore;
