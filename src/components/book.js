/* eslint-disable react/prop-types */
/* eslint-disable react/no-typos */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const { book } = props;
  return (

    <li key={book.id}>
      {book.title}
      {book.author}
      <button type="button">Comments</button>
      <button type="button" onClick={() => dispatch(removeBook(book.id))}>Remove</button>
      <button type="button">Edit</button>
    </li>
  );
};

Book.PropTypes = {
  book: PropTypes.shape.isRequired,
};

export default Book;
