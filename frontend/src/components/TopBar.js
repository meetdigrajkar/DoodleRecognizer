import React from "react";
import {
  Toolbar,
  Typography,
  AppBar,
  Button,
  IconButton,
  Icon,
} from "@material-ui/core";
import RedirectButton from "./RedirectButton";

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
            <IconButton>
              <Icon style={{ fontSize: 30 }}>
                <img alt="edit" src="favicon.ico" />
              </Icon>
            </IconButton>
            <RedirectButton url="/draw" text="Draw" />
            <RedirectButton url="/about" text="About" />
            {/* <Button color="inherit">Draw</Button>
            <Button color="inherit">About</Button> */}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default TopBar;
