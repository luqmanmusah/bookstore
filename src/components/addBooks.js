/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const AddBooks = () => {
  const updateTitle = () => {
  };
  const updateAuthor = () => {
  };

  const submitBook = () => {

  };

  const handleChange = () => {

  };

  return (
    <div>
      <h3>Add new book</h3>
      <form>
        <label>Title:</label>
        <br />
        <input type="text" className="title" name="title" onChange={updateTitle} />
        <br />
        <label>Author</label>
        <br />
        <input type="text" className="author" name="author" onChange={updateAuthor} />
        <br />
        <select onChange={handleChange}>
          <option value="Action">Action</option>
          <option value="Fiction">Fiction</option>
          <option value="Horror">Horror</option>
        </select>
        <br />
        <input type="submit" value="Submit" onClick={submitBook} />
      </form>
    </div>
  );
};

export default AddBooks;
