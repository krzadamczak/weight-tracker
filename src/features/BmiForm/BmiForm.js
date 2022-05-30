import React, { useState } from "react";
import "./BmiForm.css";
import { BmiResult } from "./BmiResult";

export const BmiForm = () => {
    const [sex, setSex] = useState("");
    const isSexSelected = (value) => value === sex;
    const handleRadioClick = (e) => setSex(e.currentTarget.value);

    const [inputValue, setInputValue] = useState({
        height: "",
        weight: "",
    });
    const [bmiData, setBmiData] = useState(null);
    const handleInputValue = (e) => {
        const { name, value } = e.currentTarget;
        setInputValue((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const handleBmiData = () => {
        const weight = parseInt(inputValue.weight);
        const height = parseInt(inputValue.height) / 100;
        const bmi = weight / Math.pow(height, 2);
        setBmiData({ weight, height, bmi });
    };

    return (
        <div className='bmi-form'>
            <div className='bmi-form__input-group'>
                <p>Your sex:</p>
                <div className='bmi-form__radio-group'>
                    <label className='label' htmlFor='female'>
                        Female
                    </label>
                    <input
                        className='input'
                        id='female'
                        type='radio'
                        value='female'
                        name='sex'
                        checked={isSexSelected("female")}
                        onChange={handleRadioClick}
                    />
                </div>
                <div className='bmi-form__radio-group'>
                    <label className='label' htmlFor='male'>
                        Male
                    </label>
                    <input
                        className='input'
                        id='male'
                        type='radio'
                        value='male'
                        name='sex'
                        checked={isSexSelected("male")}
                        onChange={handleRadioClick}
                    />
                </div>
            </div>
            <div className='bmi-form__input-group'>
                <label className='label' htmlFor='weight'>
                    Weight
                </label>
                <input
                    className='input'
                    id='weight'
                    name='weight'
                    value={inputValue.weight}
                    onChange={handleInputValue}
                />
            </div>
            <div className='bmi-form__input-group'>
                <label className='label' htmlFor='height'>
                    Height
                </label>
                <input
                    className='input'
                    id='height'
                    name='height'
                    value={inputValue.height}
                    onChange={handleInputValue}
                />
            </div>
            <button className='button bmi-form__button' onClick={handleBmiData}>
                Calculate BMI
            </button>
            {/* {bmi && <p className='result'>Your BMI is {bmi}</p>} */}
            {bmiData && <BmiResult data={bmiData} />}
        </div>
    );
};
