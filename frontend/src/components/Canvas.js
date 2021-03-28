import { Button, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useCanvas } from "./CanvasContext";
import axios from "axios";
import Graph from "./Graph";

export function Canvas() {
  const {
    canvasRef,
    prepareCanvas,
    startDrawing,
    finishDrawing,
    saveCanvas,
    draw,
    clearCanvas,
  } = useCanvas();

  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    prepareCanvas();
  }, []);

  const request = (imgData) => {
    var obj = {
      imgBase64: imgData,
    };
    axios
      .post("http://localhost:5000/api/doodle/", obj)
      .then((res) => {
        obj = [
          {
            name: "Airplane",
            count: res.data.airplane,
          },
          {
            name: "Anvil",
            count: res.data.anvil,
          },
          {
            name: "Apple",
            count: res.data.apple,
          },
          {
            name: "Ice Cream",
            count: res.data.icecream,
          },
        ];
        console.log(obj);
        setGraphData(obj);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const recognizeClick = () => {
    var imgData = saveCanvas();
    request(imgData);
  };

  const clearCanvasClick = () => {
    setGraphData([]);
    clearCanvas();
  };

  return (
    <div>
      <Grid
        container
        justify="center"
        style={{ flexGrow: 1, marginTop: "10vh" }}
        spacing={0}
      >
        <Grid item>
          <div>
            <canvas
              onMouseDown={startDrawing}
              onMouseUp={finishDrawing}
              onMouseMove={draw}
              ref={canvasRef}
            />
          </div>

          <Button
            style={{ margin: "5px" }}
            color="primary"
            variant="contained"
            onClick={recognizeClick}
          >
            Recognize
          </Button>
          <Button
            style={{ margin: "5px" }}
            color="secondary"
            variant="contained"
            onClick={clearCanvasClick}
          >
            Clear Canvas
          </Button>
        </Grid>
        <Grid item>
          <div
            style={{
              height: "50vh",
            }}
          >
            <Graph data={graphData}></Graph>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
