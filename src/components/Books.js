import React from 'react';
import book from './book';

export default books() {
  const book = {
    title: 'Democracy The God That Failed',
    author: 'Hans-Hermann Hoppe',
  };

  const books = [book];
  return (
    <ul>
      {
        Array.isArray(books) ? books.map((book) => <book key={book.id} book={book} />) : 'No Books yet'
      }
    </ul>
  );
};
