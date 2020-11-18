import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import './App.css';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';

let authenticated = false;
const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    window.location.href='/login';
    authenticated = false;
  } else {
    authenticated = true;
  };
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: authenticated,
      token: localStorage.FBIdToken,
      test: "This is working"
    };
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path={["/", "login"]} render={() => <Login authenticated={this.state.authenticated} token={this.state.token}/>} />
            <Route exact path={["/", "/login"]} component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/dashboard" render={() => <Dashboard authenticated={this.state.authenticated} token={this.state.token}/>} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
