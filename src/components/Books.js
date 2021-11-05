import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import Book from './book';

export default function Books() {
  const books = useSelector((state) => state.books, shallowEqual);
  console.log(books);
  return (
    <div>
      <h1>My Books</h1>
      <ul>
        {
        books.map((book) => <Book key={book.id} book={book} />)
        }
      </ul>
    </div>
  );
}
