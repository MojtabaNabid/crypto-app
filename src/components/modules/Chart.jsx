import { useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import styles from "./Chart.module.css";
import { convertData } from "../../helpers/converData";

function Chart({ chart, setChart }) {
  const [type, setType] = useState("prices");
  // console.log(chart)
  console.log(convertData(chart, type));

  return (
    <div className={styles.container}>
      <span className={styles.cross} onClick={() => setChart(null)}>
        X
      </span>
      <div className={styles.chart}>
        <div className={styles.graph}>
          <ChartComponent data={convertData(chart, type)} type={type} />
        </div>
      </div>
    </div>
  );
}

export default Chart;



const ChartComponent = ({data, type}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={400} height={400} data={data}>
        <CartesianGrid stroke="#404042" />
        <Line
          type="monotone"
          dataKey={type}
          stroke="#3874ff"
          strokeWidth={2}
          name={type}
        />
        <XAxis dataKey="date" hide />
        <YAxis dataKey={type} domain={["auto", "auto"]} />
        <Legend />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};
