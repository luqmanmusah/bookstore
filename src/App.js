import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Nav from './components/nav';
import Books from './components/Books';
import AddBooks from './components/addBooks';
import Categories from './components/categories';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route exact path="/">
          <Books />
          <AddBooks />
        </Route>
        <Switch>
          <Route path="/categories">
            <Categories />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
