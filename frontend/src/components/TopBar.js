import React from "react";
import {
  Toolbar,
  Typography,
  AppBar,
  Button,
  IconButton,
  Icon,
} from "@material-ui/core";

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // openDropdown: false,
      // anchorEl: null,
      // redirectToSignIn: false,
    };

    // this.openMenu = this.openMenu.bind(this);
    // this.closeMenu = this.closeMenu.bind(this);
    // this.signOut = this.signOut.bind(this);
  }

  componentDidMount() {}

  // openMenu(event) {
  //   this.setState({ openDropdown: true, anchorEl: event.currentTarget });
  // }

  // closeMenu() {
  //   this.setState({ openDropdown: false });
  // }

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
            <Button color="inherit">Draw</Button>
            <Button color="inherit">About</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default TopBar;
