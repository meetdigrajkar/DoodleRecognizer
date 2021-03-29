import React from "react";
import { Canvas } from "./Canvas";
import DisplayMessage from "./DisplayMessage";

class Draw extends React.Component {
  render() {
    return (
      <div>
        <DisplayMessage />
        <Canvas />
      </div>
    );
  }
}

export default Draw;
