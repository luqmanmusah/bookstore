import React from 'react';
import Book from './book';

export default function Books(prop) {
  const { data } = prop;
  return (
    <div>
      <h1>My Books</h1>
      <ul>
        {
        data.map((book) => <Book key={book.id} book={book} />)
        }
      </ul>
    </div>
  );
}
