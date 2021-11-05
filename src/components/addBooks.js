/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const emptyFields = () => {
  const fields = document.querySelectorAll('.add-form input');
  fields.forEach((field) => {
    field.value = '';
  });
};

function AddBooks() {
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    title: '',
    author: '',
  });

  const onChange = (e) => {
    setBook({
      ...book, [e.target.name]: e.target.value,
    });
  };

  const submitBookToStore = (book) => {
    // book.preventDefault();
    const newBook = {
      ...book,
      id: uuidv4(), // make sure it's unique
    };

    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(addBook(newBook));
  };

  const handleAddBook = () => {
    if (book.title && book.author) {
      submitBookToStore(book);
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
        <input type="text" className="title" name="title" onChange={onChange} placeholder="Title" />
        <br />
        <label>Author</label>
        <br />
        <input type="text" className="author" name="author" onChange={onChange} placeholder="Author" />
        <br />
        <select>
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
