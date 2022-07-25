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
    const { weightState, removeEntry, updateEntry, setIsUpdateFormVisible } = useWeightContext();
    // const [isUpdateFormVisible, setIsUpdateFormVisible] = useState([]);
    const [newWeight, setNewWeight] = useState({});
    const handleFormVisibility = (id) => {
        setIsUpdateFormVisible(id);
    };
    const handleUpdate = (e, id) => {
        const { name, value } = e.currentTarget;
        setNewWeight((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const handleRemove = (id) => {
        //Dispatch calls are grouped in batches
        // setIsUpdateFormVisible(id, false);
        removeEntry(id);
    };
    const handleSave = (id) => {
        // console.log("id", id);
        // console.log("newWeight", newWeight[id]);
        setIsUpdateFormVisible(id, false);
        updateEntry({ id, weight: parseInt(newWeight[id]) });
    };

    return (
        <div className={`weight-last-entries ${additionalClass}`}>
            <h2 className='h2'>Last Entries</h2>
            <div className='list'>
                {weightState.data.map((item) => (
                    <div className='list__item' key={item.id}>
                        <div className='list__date'>{printDate(item.date)}</div>
                        <div className='list__weight'>
                            {item.isUpdateFormVisible ? (
                                <>
                                    <input
                                        name={item.id}
                                        value={newWeight[item.id] ?? ""}
                                        onChange={(e) => handleUpdate(e, item.id)}
                                    />
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
                            <button onClick={() => handleFormVisibility(item.id)} className='list__update'>
                                {item.isUpdateFormVisible ? "Discard changes" : "Update"}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeightLastEntries;
