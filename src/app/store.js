import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../features/books/books_redux_module";

export default configureStore({
  reducer: {
    books: booksReducer
  }
});
