import React from "react";
import TopBar from "./TopBar";
import Draw from "./Draw";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import About from "./About";
import Home from "./Home";

class Main extends React.Component {
  render() {
    return (
      <div style={{ height: "100vh" }}>
        <Router>
          <TopBar />
          <Switch>
            <Route path="/home" exact component={() => <Home />}></Route>
            <Route path="/draw" component={() => <Draw />}></Route>
            <Route path="/about" component={() => <About />}></Route>
            <Route render={() => <Redirect to="/about" />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Main;
