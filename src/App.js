import { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';

let authenticated = false;
const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    authenticated = false;
  } else {
    authenticated = true;
  };
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      authenticated: authenticated,
      token: localStorage.FBIdToken
    };
  };

  loginLoad = () => {
    if (this.state.authenticated === false) {
      return(<Login />)
    } else {
      return(<Redirect to="/dashboard" />);
    }
  };

  signupLoad = () => {
    if (this.state.authenticated === false) {
      return(<Signup />);
    } else {
      return(<Redirect to="/dashboard" />);
    }
  };

  dashboardLoad = () => {
    if (this.state.authenticated === true) {
      return(<Dashboard authenticated={this.state.authenticated} token={this.state.token} />);
    } else {
      return(<Redirect to="/login" />);
    }
  };

  render() {
    return (
        <Router>
          <Switch>
            <Route exact path={["/", "/login"]}>
              {this.loginLoad}
            </Route>
            <Route exact path="/signup">
              {this.signupLoad}
            </Route>
            <Route exact path="/dashboard">
              {this.dashboardLoad}
            </Route>
          </Switch>
        </Router>
    )
  }
}

export default App;
