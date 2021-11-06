import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './book';
import { fetchBookAPI } from '../API/Api';
import { getBook } from '../redux/books/books';

export default function Books() {
  const books = useSelector((state) => state.books);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchBookAPI()
      .then((response) => dispatch(getBook(response)));
  }, []);

  return (
    <div>
      <h1>My Books</h1>
      <ul>
        {
        books.map((book) => <Book key={book.item_id} bookArray={book} />)
        }
      </ul>
    </div>
  );
}
