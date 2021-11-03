/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Books = () => {
  const updateTitle = () => {
  };
  const updateAuthor = () => {
  };

  const submitBook = () => {

  };

  return (
    <div>
      <h3>Add new book</h3>
      <form>
        <label>Title:</label>
        <br />
        <input type="text" className="title" name="title" onChange={updateTitle} />
        <br />
        <label>Category:</label>
        <br />
        <input type="text" className="category" name="category" onChange={updateAuthor} />
        <br />
        <input type="submit" value="Submit" onClick={submitBook} />
      </form>
    </div>
  );
};

export default Books;
