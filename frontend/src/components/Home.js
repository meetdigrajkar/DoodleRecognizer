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
        <section
          className="section"
          style={{ textAlign: "start", margin: "20px" }}
        >
          <div className="box">
            <div className="content is-normal has-text-primary-light">
              <h2 className="has-text-danger">Our system</h2>
              <p>
                Draw a doodle from a category and we will identify parts of it,
                and give you data on which category your doodle was from! The
                categories below are what we support at this moment.
              </p>
              <ul className="has-text-warning">
                <li>Airplane</li>
                <li>Anvil</li>
                <li>Apple</li>
                <li>Ice cream</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
