/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Book from './book';
import AddBooks from './addBooks';

// eslint-disable-next-line react/prop-types
const Books = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  // eslint-disable-next-line react/prop-types
  const books = props.data;
  return (
    <div>
      <ul>
        {
        // eslint-disable-next-line react/prop-types
        books.map((book) => <Book key={book.item_id} bookArray={book} />)
        }
      </ul>
      <hr />
      <AddBooks />
    </div>
  );
};

export default Books;
