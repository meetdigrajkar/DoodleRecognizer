import {
  Button,
  Grid,
  Switch,
  FormHelperText,
  NativeSelect,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useCanvas } from "./CanvasContext";
import axios from "axios";
import Graph from "./Graph";
import { withStyles } from "@material-ui/core/styles";

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
  const [algorithm, setAlgorithm] = useState(1);

  useEffect(() => {
    prepareCanvas();
  }, []);

  const request = (imgData, algorithm) => {
    var obj = {
      imgBase64: imgData,
      algorithm: algorithm,
    };
    axios
      .post("http://localhost:5000/api/doodle/", obj)
      .then((res) => {
        var myObject = JSON.parse(res.data);
        console.log(myObject);
        obj = [
          {
            name: "Airplane",
            count: myObject[0],
          },
          {
            name: "Anvil",
            count: myObject[1],
          },
          {
            name: "Apple",
            count: myObject[2],
          },
          {
            name: "Ice Cream",
            count: myObject[3],
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
    request(imgData, algorithm);
  };

  const clearCanvasClick = () => {
    setGraphData([]);
    clearCanvas();
  };

  const handleChange = (event) => {
    setAlgorithm(event.target.value);
  };

  return (
    <div>
      <FormControl style={{ marginTop: "5vh" }}>
        <NativeSelect value={algorithm} onChange={handleChange}>
          <option value={1}>OpenCV Patched-Base Template Matching</option>
          <option value={2}>Neural Network Convolution</option>
        </NativeSelect>
        <FormHelperText>Select Doodle Recognition Algorithm</FormHelperText>
      </FormControl>
      <Grid
        container
        justify="center"
        style={{ flexGrow: 1, marginTop: "5vh" }}
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
