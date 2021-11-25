/* eslint-disable no-alert */
/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBookAPI } from '../API/Api';
import { addBook } from '../redux/books/books';
// import Categories from './categories';

// const emptyFields = () => {
//   const fields = document.querySelectorAll('.add-form input');
//   fields.forEach((field) => {
//     field.value = '';
//   });
// };

function AddBooks() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();

  // const onChange = (e) => {
  //   setBook({
  //     ...book, [e.target.name]: e.target.value,
  //   });
  // };

  const submitBookToStore = async () => {
    // e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title,
      category: author,
      // make sure it's unique
    };

    // dispatch an action and pass it the newBook object (your action's payload)
    addBookAPI(newBook)
      // eslint-disable-next-line operator-linebreak
      .then((response) => (response.data === 'Created' ?
        dispatch(addBook(newBook)) : 'Not Added'))
      .catch((error) => error);
  };

  // const handleAddBook = () => {
  //   if (title && author) {
  //     submitBookToStore();
  //     emptyFields();
  //   } else {
  //     alert('Fill in the empty fields');
  //   }
  // };
  return (
    <div className="form">
      <h3>Add new book</h3>
      <form className="form-input">
        <input type="text" className="title" name="title" onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
        <br />
        <select className="categories" onChange={(e) => setAuthor(e.target.value)}>
          <option value="category">Category</option>
          <option value="Action">Action</option>
          <option value="Fiction">Fiction</option>
          <option value="Horror">Horror</option>
        </select>
        <br />
        <input type="button" className="submit" value="Submit" onClick={submitBookToStore} />
      </form>
    </div>
  );
}

export default AddBooks;
