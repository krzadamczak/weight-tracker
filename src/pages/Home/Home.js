import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AddEntry from "../../components/AddEntry/AddEntry";

import WeightGraph from "../../components/WeightGraph/WeightGraph";
import WeightLastEntries from "../../components/WeightLastEntries/WeightLastEntries";
import { useWeightContext } from "../../store/WeightContext";
import { addLeadingZero } from "../../utils";

import "./Home.css";
const Home = () => {
    const { weightState } = useWeightContext();

    const [isEntryEmpty, setIsEntryEmpty] = useState(false);

    const labels = weightState.data
        .map((item) => {
            const date = new Date(item.date);
            const day = addLeadingZero(date.getDate());
            const month = addLeadingZero(date.getMonth());
            const year = date.getFullYear();
            return `${day}.${month}.${year}`;
        })
        .reverse();
    const weight = weightState.data.map((item) => item.weight).reverse();

    const [chartState, setChartState] = useState({
        labels: labels,
        datasets: [
            {
                label: "Weight",
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                data: weight,
            },
        ],
    });
    useEffect(() => {
        setChartState((prevState) => ({
            ...prevState,
            labels: labels,
            datasets: [
                {
                    ...prevState.datasets[0],
                    data: weight,
                },
            ],
        }));
    }, [weightState]);
    useEffect(() => {
        //Gdyby użytkownik nie wypełnił formularza przez równy miesiąc warunek poniżej nie zostałby spełniony i opcja dodania nowego wpisu nie byłaby widoczna. (Jak to zrobić lepiej?)
        if (weightState.data.length > 0) {
            setIsEntryEmpty(
                new Date() > new Date(weightState.data[0].date) &&
                    new Date().getDate() > new Date(weightState.data[0].date).getDate()
            );
        }
    });
    return (
        <div className='home'>
            <div className='home__first-inner'>
                <WeightGraph data={chartState} />

                {isEntryEmpty || weightState.data.length === 0 ? <AddEntry /> : <p>Come back tomorrow!</p>}
            </div>
            <WeightLastEntries bemPostionClass='home__weight-last-entries' />
        </div>
    );
};

export default Home;
