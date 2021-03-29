import { Button } from "@material-ui/core";
import React from "react";
import { Route } from "react-router-dom";

class RedirectButton extends React.Component {
  render() {
    return (
      <Route
        render={({ history }) => (
          <Button
            color="inherit"
            // style={{ color: "black", fontVariant: "unicase" }}
            onClick={() => {
              history.push(this.props.url);
            }}
          >
            {this.props.text}
          </Button>
        )}
      />
    );
  }
}

export default RedirectButton;
