import React, { useState } from "react";

export const BmiCalculator = () => {
    const [sex, setSex] = useState("");
    const isSexSelected = (value) => value === sex;
    const handleRadioClick = (e) => setSex(e.currentTarget.value);

    const [inputValue, setInputValue] = useState({
        height: "",
        weight: "",
    });
    const handleInputValue = (e) => {
        const { name, value } = e.currentTarget;
        setInputValue((prevState) => ({
            ...prevState,
            [name]: value,
        }));
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
            <p>{sex}</p>
            {inputValue.weight}
            {inputValue.height}
        </div>
    );
};
