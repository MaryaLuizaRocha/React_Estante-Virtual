// BookList.js
import React from "react";
import BookCard from "./BookCard";

const BookList = ({ title, books, updateShelf }) => (
  <div className="book-list">
    <h2>{title}</h2>
    <div className="book-list-container">
      {books.map((book) => (
        <BookCard key={book.id} book={book} updateShelf={updateShelf} />
      ))}
    </div>
  </div>
);

export default BookList;
