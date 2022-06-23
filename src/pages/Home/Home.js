import React from "react";
import WeightGraph from "../../components/WeightGraph/WeightGraph";

import WeightLastEntries from "../../components/WeightLastEntries/WeightLastEntries";
import "./Home.css";
const Home = () => {
    const chartData = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                label: "Weight",
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                data: [110, 105, 106, 101, 95, 93, 94],
            },
        ],
    };
    return (
        <div className='home'>
            <div className='home-first-wrapper'>
                <WeightGraph data={chartData} />
                <WeightLastEntries bemPostionClass='home__weight-last-entries' />
            </div>
        </div>
    );
};

export default Home;
