import React from "react";
import { Typography, Grid, IconButton } from "@material-ui/core";
import ReplayIcon from "@material-ui/icons/Replay";
import { CATEGORY_LIST } from "./Categories";

class DisplayMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: CATEGORY_LIST[0],
    };
    this.getRandomCategory = this.getRandomCategory.bind(this);
  }

  componentDidMount() {
    this.getRandomCategory();
  }

  getRandomCategory() {
    var index;
    do {
      index = Math.floor(Math.random() * CATEGORY_LIST.length);
    } while (CATEGORY_LIST[index] === this.state.category);

    this.setState({ category: CATEGORY_LIST[index] });
  }

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
          Welcome to Doodle Recognizer
        </Typography>
        <Grid container justify="center" style={{ flexGrow: 1 }} spacing={0}>
          <Grid item>
            <Typography
              style={{
                marginRight: "5px",
                marginTop: "5px",
                fontFamily: "rainday",
              }}
              variant="h6"
            >
              Draw {this.state.category}!
            </Typography>
          </Grid>
          <Grid item>
            <IconButton onClick={this.getRandomCategory}>
              <ReplayIcon style={{ color: "#3298dc" }} fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default DisplayMessage;
