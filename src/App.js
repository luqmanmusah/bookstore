/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Categories from './redux/categories/categories';
import AddBooks from './components/addBooks';
import Nav from './components/nav';
import ListBooks from './components/book';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="categories">
            <Categories />
          </Route>
          <Route path="/">
            <ListBooks />
          </Route>
          <Route path="/">
            <AddBooks />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
