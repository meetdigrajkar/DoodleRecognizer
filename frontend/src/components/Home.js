import React from "react";
import TopBar from "./TopBar";
import Draw from "./Draw";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Button } from "@material-ui/core";
class Home extends React.Component {
  render() {
    return (
      <div style={{ height: "100vh" }}>
        <Router>
          <TopBar />
          <Switch>
            <Route path="/draw" exact component={() => <Draw />}></Route>
            <Route path="/about" component={() => <Button> a</Button>}></Route>
            <Route render={() => <Redirect to="/about" />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Home;
