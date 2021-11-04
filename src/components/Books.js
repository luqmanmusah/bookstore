import React from 'react';
import Book from './book';

export default function Books() {
  const book1 = [{
    title: 'The First Book',
    uuthor: 'John Hope',
  },
  {
    title: 'The Second Book',
    author: 'Bishop Eve',
  },
  {
    title: 'The Third Book',
    author: 'Luke Cage',
  },
  ];
  return (
    <div>
      <h1>My Books</h1>
      <ul>
        {
        book1.map((book) => <Book key={book.id} book={book} />)
        }
      </ul>
    </div>
  );
}
