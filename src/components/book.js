/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-typos */
import React from 'react';
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import { removeBookAPI } from '../API/Api';

const Book = (prop) => {
  const dispatch = useDispatch();
  const { item_id, title, category } = prop.bookArray;
  const removeBookFromStore = () => {
    removeBookAPI(item_id);
    dispatch(removeBook({ item_id }));
  };
  return (

    <li key={item_id}>
      {title}
      {' | '}
      {category}
      <button type="button">Comments</button>
      <button type="button" onClick={() => removeBookFromStore(item_id)}>Remove</button>
      <button type="button">Edit</button>
    </li>
  );
};

// Book.propTypes = {
//   book: PropTypes.shape({
//     item_id: PropTypes.string,
//     title: PropTypes.string,
//     category: PropTypes.string,
//   }).isRequired,
// };

export default Book;
