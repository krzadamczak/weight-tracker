import React, { useState } from "react";

export const BmiCalculator = () => {
    const [sex, setSex] = useState("");
    const isSexSelected = (value) => value === sex;
    const handleRadioClick = (e) => setSex(e.currentTarget.value);

    const [inputValue, setInputValue] = useState({
        height: "",
        weight: "",
    });
    const [bmi, setBmi] = useState(0);
    const handleInputValue = (e) => {
        const { name, value } = e.currentTarget;
        setInputValue((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const handleBmi = () => {
        const weight = parseInt(inputValue.weight);
        const height = parseInt(inputValue.height) / 100;
        console.log(Math.pow(height, 2));
        const bmiValue = weight / Math.pow(height, 2);
        setBmi(bmiValue);
    };

    return (
        <div className='bmi-calculator'>
            <label htmlFor='female'>Female</label>
            <input
                id='female'
                type='radio'
                value='female'
                name='sex'
                checked={isSexSelected("female")}
                onChange={handleRadioClick}
            />
            <label htmlFor='male'>Male</label>
            <input
                id='male'
                type='radio'
                value='male'
                name='sex'
                checked={isSexSelected("male")}
                onChange={handleRadioClick}
            />
            <label htmlFor='weight'>Waga</label>
            <input id='weight' name='weight' value={inputValue.weight} onChange={handleInputValue} />
            <label htmlFor='height'>Wzrost</label>
            <input id='height' name='height' value={inputValue.height} onChange={handleInputValue} />
            <button onClick={handleBmi}>Oblicz BMI</button>
            Twoje BMI wynosi <span>{bmi}</span>
        </div>
    );
};
