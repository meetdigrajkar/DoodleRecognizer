import React from "react";
import { Typography, Grid, IconButton } from "@material-ui/core";

class About extends React.Component {
  render() {
    return (
      <div>
        <Typography
          style={{
            paddingTop: "10px",
            color: "#3298dc",
            fontFamily: "wearedimdam",
          }}
          variant="h2"
        >
          About Doodle Recognizer
        </Typography>
      </div>
    );
  }
}

export default About;
