/* eslint-disable react/prop-types */
/* eslint-disable react/no-typos */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const { book } = props;

  const removeBookFromStore = (id) => {
    dispatch(removeBook({ id }));
  };
  return (

    <li key={book.id}>
      {book.title}
      {book.author}
      <button type="button">Comments</button>
      <button type="button" onClick={() => removeBookFromStore(book.id)}>Remove</button>
      <button type="button">Edit</button>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default Book;
