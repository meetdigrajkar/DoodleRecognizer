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

const colors = ["#33FFBD", "#AD33FF", "#FF5733", "#33E0FF"];
const data = [
  {
    name: "Airplane",
    count: 0,
  },
  {
    name: "Anvil",
    count: 0,
  },
  {
    name: "Apple",
    count: 0,
  },
  {
    name: "Ice Cream",
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
          width={window.innerWidth * 0.35}
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
