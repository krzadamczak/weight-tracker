import React from "react";

export const BmiCalculator = () => {
    return (
        <div className='bmi-calculator'>
            <label htmlFor='female'>Female</label>
            <input id='female' type='radio' value='female' name='sex' />
            <label htmlFor='male'>Male</label>
            <input id='male' type='radio' value='male' name='sex' />

            <label htmlFor='weight'>Waga</label>
            <input id='weight' />
            <label htmlFor='height'>Wzrost</label>
            <input id='height' />
        </div>
    );
};
