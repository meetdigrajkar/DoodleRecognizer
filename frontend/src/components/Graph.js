import React from "react";
// import { Bar } from "@reactchartjs/react-chart.js";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";
import { COLORS } from "./Categories";

const data = [
  {
    name: "Bear",
    count: 0,
  },
  {
    name: "Bee",
    count: 0,
  },
  {
    name: "Bird",
    count: 0,
  },
  {
    name: "Cat",
    count: 0,
  },
  {
    name: "Cow",
    count: 0,
  },
  {
    name: "Crocodile",
    count: 0,
  },
  {
    name: "Dog",
    count: 0,
  },
  {
    name: "Elephant",
    count: 0,
  },
  {
    name: "Giraffe",
    count: 0,
  },
  {
    name: "Horse",
    count: 0,
  },
];

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      render: false,
    };
  }

  render() {
    return (
      <div>
        <BarChart
          width={window.innerWidth * 0.4}
          height={window.innerHeight * 0.54}
          data={this.props.data.length === 0 ? data : this.props.data}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#000000">
            {this.props.data.length !== 0 &&
              this.props.data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index]}
                  strokeWidth={index === 2 ? 4 : 1}
                />
              ))}
          </Bar>
        </BarChart>
        {this.props.algorithm === "1" ? "Count" : "Percentage"}
      </div>
    );
  }
}

export default Graph;
