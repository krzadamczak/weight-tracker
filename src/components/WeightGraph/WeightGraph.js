import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import "./WeightGraph.css";

Chart.defaults.font.family = "Cairo";

const WeightGraph = (props) => {
    const { data } = props;
    return (
        <div className='weight-graph'>
            <h1>Your Progress</h1>
            <Line data={data}></Line>
        </div>
    );
};

export default WeightGraph;
