import React from "react";
import TopBar from "./TopBar";
import { Canvas } from "./Canvas";
import DisplayMessage from "./DisplayMessage";

class Home extends React.Component {
  render() {
    return (
      <div style={{ height: "100vh" }}>
        <TopBar />
        <DisplayMessage />
        <Canvas />
      </div>
    );
  }
}

export default Home;
