/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const AddBooks = () => (
  <div>
    <h3>Add new book</h3>
    <form>
      <label>Title:</label>
      <br />
      <input type="text" className="title" name="title" placeholder="Title" />
      <br />
      <label>Author</label>
      <br />
      <input type="text" className="author" name="author" placeholder="Author" />
      <br />
      <select>
        <option value="Action">Action</option>
        <option value="Fiction">Fiction</option>
        <option value="Horror">Horror</option>
      </select>
      <br />
      <input type="submit" value="Submit" />
    </form>
  </div>
);

export default AddBooks;
