import React, { useReducer } from "react";
import "./BmiForm.css";
import { BmiResult } from "./BmiResult";

const BMI_ACTIONS = {
    SET_DATA: "SET_DATA",
    CALCULATE_BMI: "CALCULATE_BMI",
};

const bmiReducer = (state, action) => {
    switch (action.type) {
        case BMI_ACTIONS.SET_DATA:
            let { name, value } = action.payload.target;
            if (typeof value === "string" && action.payload.target.type !== "radio") value = parseInt(value);
            return { ...state, [name]: value };
        case BMI_ACTIONS.CALCULATE_BMI:
            const weight = state.weight;
            const height = state.height / 100;
            const bmi = weight / Math.pow(height, 2);
            return { ...state, bmi };
        default:
            return state;
    }
};

export const BmiForm = () => {
    const [bmiState, dispatchBmi] = useReducer(bmiReducer, {});
    const isSexSelected = (value) => value === bmiState.sex;

    const inputHandler = (e) => {
        dispatchBmi({ type: BMI_ACTIONS.SET_DATA, payload: e });
    };
    const bmiCalculateHandler = () => dispatchBmi({ type: BMI_ACTIONS.CALCULATE_BMI });

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
                        onChange={inputHandler}
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
                        onChange={inputHandler}
                    />
                </div>
            </div>
            <div className='bmi-form__input-group'>
                <label className='label' htmlFor='weight'>
                    Weight
                </label>
                <input className='input' id='weight' name='weight' value={bmiState.weight} onChange={inputHandler} />
            </div>
            <div className='bmi-form__input-group'>
                <label className='label' htmlFor='height'>
                    Height (in cm)
                </label>
                <input className='input' id='height' name='height' value={bmiState.height} onChange={inputHandler} />
            </div>
            <button className='button bmi-form__button' onClick={bmiCalculateHandler}>
                Calculate BMI
            </button>
            {/* {bmi && <p className='result'>Your BMI is {bmi}</p>} */}
            {bmiState && <BmiResult data={bmiState} />}
        </div>
    );
};
