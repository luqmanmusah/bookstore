/* eslint-disable no-alert */
/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBookAPI } from '../API/Api';
import { addBook } from '../redux/books/books';
import Categories from './categories';

const emptyFields = () => {
  const fields = document.querySelectorAll('.add-form input');
  fields.forEach((field) => {
    field.value = '';
  });
};

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
    addBookAPI(newBook);

    dispatch(addBook(newBook));
  };

  const handleAddBook = () => {
    if (title && author) {
      submitBookToStore();
      emptyFields();
    } else {
      alert('Fill in the empty fields');
    }
  };
  return (
    <div>
      <h3>Add new book</h3>
      <form>
        <label>Title:</label>
        <br />
        <input type="text" className="title" name="title" onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
        <br />
        <select value={Categories} name="categories" className="categories" onChange={(e) => setAuthor(e.target.value)}>
          <option defaultValue="">Category</option>
          <option value="Action">Action</option>
          <option value="Fiction">Fiction</option>
          <option value="Horror">Horror</option>
        </select>
        <br />
        <input type="button" value="Submit" onClick={handleAddBook} />
      </form>
    </div>
  );
}

export default AddBooks;
