import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useHistory } from 'react-router-dom';

import Login from './components/Login';
import GasPrices from './components/GasPrices';

function App() {
  let history = useHistory();
  console.log("history", history);

  const logout = () => {
    localStorage.removeItem("authToken");
    history.push("/login");
  };


  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link onClick={logout}>Logout</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/protected" component={GasPrices} />
          <Route path="/login" component={Login} />
          <Route component={Login} /> {/* This is like the default case in a Javascript switch statement */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
