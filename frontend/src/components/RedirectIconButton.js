import { IconButton, Icon } from "@material-ui/core";
import React from "react";
import { Route } from "react-router-dom";

class RedirectIconButton extends React.Component {
  render() {
    return (
      <Route
        render={({ history }) => (
          <IconButton
            onClick={() => {
              history.push(this.props.url);
            }}
          >
            <Icon style={{ fontSize: 30 }}>
              <img alt="edit" src={this.props.icon} />
            </Icon>
          </IconButton>
        )}
      />
    );
  }
}

export default RedirectIconButton;
