import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Nav from './components/nav';
import Books from './components/Books';
import Categories from './components/categories';
import { fetchBookAPI } from './API/Api';
import { getBook } from './redux/books/books';
import AddBooks from './components/addBooks';

function App() {
  const bookList = useSelector((state) => state.books);

  const dispatch = useDispatch();
  useEffect(() => {
    fetchBookAPI()
      .then((response) => dispatch(getBook(response)));
  }, []);
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route exact path="/">
          <Books data={bookList} />
          <hr />
          <AddBooks />
        </Route>
        <Route path="/categories" component={Categories} />
      </Router>
    </div>
  );
}

export default App;
