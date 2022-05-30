import React from "react";
//Błąd - przy wpisaniu 73 kg i 171 cm nic się nie pokazuje.
export const BmiResult = (props) => {
    const { bmi, weight, height } = props.data;
    console.log(props.data);
    const calculateProperWeight = (bmi, height) => bmi * Math.pow(height, 2);
    const createProperWeightString = (bmi, weight, height) => {
        let properWeight;
        if (bmi <= 18.4) {
            properWeight = Math.ceil(Math.abs(calculateProperWeight(18.5, height) - weight));
            return `You should gain around ${properWeight} kg`;
        } else if (bmi >= 25) {
            properWeight = Math.ceil(Math.abs(calculateProperWeight(24.9, height) - weight));
            return `You should lose around ${properWeight} kg`;
        }
    };
    let bmiResult = "";
    if (bmi <= 18.4) {
        bmiResult = `Your BMI is ${bmi}. You are underweight. ${createProperWeightString(bmi, weight, height)}`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiResult = `Your BMI is ${bmi}. You have normal weight`;
    } else if (bmi >= 25 && bmi <= 29.9) {
        bmiResult = `Your BMI is ${bmi}. You are overweight. ${createProperWeightString(bmi, weight, height)}`;
    } else if (bmi >= 30) {
        bmiResult = `Your BMI is ${bmi}. You are obese. ${createProperWeightString(bmi, weight, height)}`;
    }
    return (
        <div>
            <p className='result'>{bmiResult}</p>
        </div>
    );
};
