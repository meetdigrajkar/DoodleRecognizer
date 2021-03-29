import React from "react";
// import { Bar } from "@reactchartjs/react-chart.js";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
} from "recharts";

//const colors = ["#33FFBD", "#AD33FF", "#FF5733", "#33E0FF"];
const colors = [
  "#E74C3C",
  "#8E44AD",
  "#3498DB",
  "#16A085",
  "#2ECC71",
  "#F39C12",
  "#D35400",
  "#BDC3C7",
  "#7F8C8D",
  "#2C3E50",
];
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
                  fill={colors[index]}
                  strokeWidth={index === 2 ? 4 : 1}
                />
              ))}
          </Bar>
        </BarChart>
        Count
      </div>
    );
  }
}

export default Graph;
