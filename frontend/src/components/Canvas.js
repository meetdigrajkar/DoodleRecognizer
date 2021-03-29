import {
  Button,
  Grid,
  FormHelperText,
  NativeSelect,
  FormControl,
} from "@material-ui/core";
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
  const [algorithm, setAlgorithm] = useState("1");

  useEffect(() => {
    prepareCanvas();
  }, []);

  const request = (imgData, algorithm) => {
    var obj = {
      imgBase64: imgData,
      algorithm: algorithm,
    };
    axios
      .post("https://doodle-recog-app.herokuapp.com/api/doodle/", obj)
      .then((res) => {
        var myObject = JSON.parse(res.data);
        console.log(myObject);
        obj = [
          {
            name: "Bear",
            count: myObject[0],
          },
          {
            name: "Bee",
            count: myObject[1],
          },
          {
            name: "Bird",
            count: myObject[2],
          },
          {
            name: "Cat",
            count: myObject[3],
          },
          {
            name: "Cow",
            count: myObject[4],
          },
          {
            name: "Crocodile",
            count: myObject[5],
          },
          {
            name: "Dog",
            count: myObject[6],
          },
          {
            name: "Elephant",
            count: myObject[7],
          },
          {
            name: "Giraffee",
            count: myObject[8],
          },
          {
            name: "Horse",
            count: myObject[9],
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
            <Graph data={graphData} algorithm={algorithm}></Graph>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
