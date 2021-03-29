import React from "react";
import { Toolbar, AppBar } from "@material-ui/core";
import RedirectButton from "./RedirectButton";
import RedirectIconButton from "./RedirectIconButton";

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div style={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: "lightblue" }}>
          <Toolbar style={{ background: "#3298dc" }}>
            <RedirectIconButton url="/home" icon="favicon.ico" />
            <RedirectButton url="/draw" text="Draw" />
            <RedirectButton url="/about" text="About" />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default TopBar;
