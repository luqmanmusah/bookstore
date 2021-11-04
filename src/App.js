import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Categories from './components/categories';
import Nav from './components/nav';
import Books from './components/Books';
import AddBooks from './components/addBooks';

function App() {
  const book1 = [{
    title: 'The First Book',
    uuthor: 'John Hope',
  },
  {
    title: 'The Second Book',
    author: 'Bishop Eve',
  },
  {
    title: 'The Third Book',
    author: 'Luke Cage',
  },
  ];

  return (
    <div className="App">
      <Router>
        <Nav />
        <Route exact path="/">
          <Books data={book1} />
          <AddBooks />
        </Route>
        <Switch>
          <Route exact path="categories">
            <Categories />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
