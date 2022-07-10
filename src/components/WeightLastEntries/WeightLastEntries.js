import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useWeightContext } from "../../store/WeightContext";
import { addLeadingZero } from "../../utils";
import "./WeightLastEntries.css";

function printDate(dateObj) {
    const date = new Date(dateObj);
    const day = addLeadingZero(date.getDate());
    const month = addLeadingZero(date.getMonth());
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
}

const WeightLastEntries = (props) => {
    const additionalClass = props?.bemPostionClass ?? "";
    const { weightState, removeEntry, updateEntry } = useWeightContext();
    const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);
    const [newWeight, setNewWeight] = useState(0);
    const handleFormVisibility = () => {
        setIsUpdateFormVisible((prevState) => !prevState);
    };
    const handleUpdate = (e, id) => {
        const { value } = e.currentTarget;
        setNewWeight(value);
    };
    const handleRemove = (id) => {
        removeEntry(id);
        setIsUpdateFormVisible(false);
    };
    const handleSave = (id) => {
        setIsUpdateFormVisible(false);
        console.log("newWeight", newWeight);
        updateEntry({ id, weight: newWeight });
    };

    return (
        <div className={`weight-last-entries ${additionalClass}`}>
            <h2 className='h2'>Last Entries</h2>
            <div className='list'>
                {weightState.data.map((item) => (
                    <div className='list__item' key={item.id}>
                        <div className='list__date'>{printDate(item.date)}</div>
                        <div className='list__weight'>
                            {isUpdateFormVisible ? (
                                <>
                                    <input name='weight' value={newWeight} onChange={(e) => handleUpdate(e, item.id)} />
                                    <button onClick={() => handleSave(item.id)}>Save</button>
                                </>
                            ) : (
                                <>{item.weight} kg</>
                            )}
                        </div>
                        <div className='list__options'>
                            <button onClick={() => handleRemove(item.id)} className='list__delete'>
                                Delete
                            </button>
                            <button onClick={handleFormVisibility} className='list__update'>
                                {isUpdateFormVisible ? "Discard changes" : "Update"}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeightLastEntries;
