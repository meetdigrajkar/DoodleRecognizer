import React from "react";
import { Typography } from "@material-ui/core";
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

        <section
          className="section"
          style={{ textAlign: "start", margin: "20px" }}
        >
          <div className="box">
            <div className="content is-normal has-text-primary-light">
              <h2 className="has-text-danger">Algorithms Supported</h2>
              <p>
                The doodle recognizer project uses two algorithms neural
                networks convolution and OpenCV patch based template matching to
                recognize the doodle drawn by the user.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
