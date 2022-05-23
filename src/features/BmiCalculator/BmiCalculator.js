import React from "react";

export const BmiCalculator = () => {
    return (
        <div>
            <input type='radio' value='female' name='sex' />
            Female
            <input type='radio' value='male' name='sex' />
            Male
            <label>
                Waga
                <input />
            </label>
            <label>
                Wzrost
                <input />
            </label>
        </div>
    );
};
