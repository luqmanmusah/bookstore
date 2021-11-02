import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Categories from "./redux/categories/categories";


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route>
            <Categories />
          </Route>
          <Route>
            <Books />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
