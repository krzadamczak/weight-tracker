import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const Home = () => {
    const chartData = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                label: "Your Weight",
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                data: [110, 105, 106, 101, 95, 93, 94],
            },
        ],
    };
    return (
        <>
            <h1>Weight Graph</h1>
            <Line data={chartData}></Line>
            <h2>Last Entries</h2>
            <div className='list'>
                <div className='list__item'>
                    <div className='list__date'>01.12.2022</div>
                    <div className='list__weight'>85 kg</div>
                    <div className='list__options'>
                        <div className='list__delete'>Delete</div>
                        <div className='list__update'>Update</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
