import React from "react";
import { Typography } from "@material-ui/core";
import "../styles/style.css";

class Home extends React.Component {
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
          Home Doodle Recognizer
        </Typography>
        <section class="section" style={{ textAlign: "start", margin: "20px" }}>
          <div class="box has-background-black-ter">
            <div class="content is-normal has-text-primary-light">
              <h2 class="has-text-danger">Our system</h2>
              <p>
                Draw a doodle from a category and we will identify parts of it,
                and give you data on which category your doodle was from! The
                categories below are what we support at this moment.
              </p>
              <ul class="has-text-warning">
                <li>Airplane</li>
                <li>Anvil</li>
                <li>Apple</li>
                <li>Ice cream</li>
              </ul>
            </div>
          </div>
        </section>
        {/* <Typography
          style={{
            paddingTop: "10px",
            color: "#3298dc",
            fontFamily: "wearedimdam",
          }}
          variant="h2"
        >
          Home Doodle Recognizer
        </Typography>
        <Typography
          style={{
            marginRight: "5px",
            marginTop: "5px",
            fontFamily: "rainday",
          }}
          variant="h6"
        >
          Image recognition and identification!
        </Typography>
        <Paper
          style={{
            margin: "40px",
            textAlign: "start",
            backgroundColor: "#69DCE2",
          }}
          elevation={3}
        >
          <Typography variant="h6">Our system</Typography>
          <Typography variant="subtitle1">
            Draw a doodle from a category and we will identify parts of it, and
            give you data on which category your doodle was from! The categories
            below are what we support at this moment.
          </Typography>
          <ul class="has-text-warning">
            <li>Apple</li>
            <li>Tower</li>
            <li>Pants</li>
            <li>Ice cream</li>
            <li>Keys</li>
          </ul>
        </Paper> */}
      </div>
    );
  }
}

export default Home;
