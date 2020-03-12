import React, { Component } from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EmpList from "./components/EmpList/EmpList";

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/">
              <LoginForm />
            </Route>
            <Route path="/emplist">
              <EmpList />
            </Route>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
