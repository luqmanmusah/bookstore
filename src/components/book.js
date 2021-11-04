/* eslint-disable react/prop-types */
/* eslint-disable react/no-typos */
import React from 'react';
import PropTypes from 'prop-types';

export default function Book({ book }) {
  return (

    <li key={book.id}>
      {book.title}
      {book.author}
      <button type="button">Comments</button>
      <button type="button">Remove</button>
      <button type="button">Edit</button>
    </li>
  );
}

Book.PropTypes = {
  book: PropTypes.shape.isRequired,
};
