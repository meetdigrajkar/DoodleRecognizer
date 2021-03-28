import React from "react";

class CanvasTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.test = this.test.bind(this);
  }

  test() {
    var imgData = this.context.toDataURL();
    console.log(imgData);
  }

  render() {
    return (
      <canvas
        style={{ backgroundColor: "red;", height: "100px", width: "100px" }}
        ref={(c) => (this.context = c.getContext("2d"))}
        onClick={this.test}
      ></canvas>
    );
  }
}

export default CanvasTest;
