import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useWeightContext } from "../../store/WeightContext";
import "./AddEntry.css";
import { nanoid } from "nanoid";

const AddEntry = () => {
    const { addEntry } = useWeightContext();
    const [inputValue, setInputValue] = useState(0);
    const handleChange = (e) => {
        const { value } = e.currentTarget;
        const parsedValue = parseInt(value);
        setInputValue(parsedValue);
    };

    //Stan jest aktualizowany asynchronicznie, dlatego console.log() nie zwracał bieżącego stanu po kliknięciu.
    //Wywołania console.log() w useEffect sprawa, że widoczny jest aktualny stan.
    const handleClick = () => {
        if (inputValue === 0) {
            console.log("Type correct weight");
            return;
        }

        addEntry({ id: nanoid(), weight: inputValue, date: new Date(), isUpdateFormVisible: false });
    };

    return (
        <div className='add-entry'>
            <label className='add-entry__label' htmlFor='add-weight'>
                What's your weight today? (in kg)
            </label>
            <input
                onChange={handleChange}
                className='add-entry__input'
                name='weight'
                id='add-weight'
                placeholder='60'
                value={inputValue}
            />
            <button onClick={handleClick} className='add-entry__button'>
                Add new entry
            </button>
        </div>
    );
};

export default AddEntry;
