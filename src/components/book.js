/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-typos */
import React from 'react';
// import PropTypes from 'prop-types';
// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import { removeBookAPI } from '../API/Api';
import Percentage from './percentage';
import Progress from './progress';

const Book = (prop) => {
  const dispatch = useDispatch();
  const { item_id, title, category } = prop.bookArray;

  const removeBookFromStore = () => {
    removeBookAPI(item_id)
      .then((response) => {
        if (response.data === 'The book was deleted successfully!') {
          dispatch(removeBook({ item_id }));
        }
      });
  };

  return (

    <div key={item_id} className="Book">
      <div>
        <p className="book_title">{title}</p>
        <p className="book_category">{category}</p>

        <div id={item_id} className="book-options">
          <a href="/#">Comments</a>
          {' | '}
          <a href="/#" onClick={() => removeBookFromStore(item_id)}>Remove</a>
          {' | '}
          <a href="/#">Edit</a>
        </div>
      </div>
      <div>
        <Percentage />
      </div>
      <span className="border-r border-gray-200 mx-2" />
      <div>
        <Progress />
      </div>
    </div>
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
