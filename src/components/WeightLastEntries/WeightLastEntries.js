import React from "react";
import "./WeightLastEntries.css";

const WeightLastEntries = (props) => {
    const additionalClass = props?.bemPostionClass ?? "";
    return (
        <div className={`weight-last-entries ${additionalClass}`}>
            <h2 className='h2'>Last Entries</h2>
            <div className='list'>
                <div className='list__item'>
                    <div className='list__date'>01.12.2022</div>
                    <div className='list__weight'>85 kg</div>
                    <div className='list__options'>
                        <div className='list__delete'>Delete</div>
                        <div className='list__update'>Update</div>
                    </div>
                </div>
                <div className='list__item'>
                    <div className='list__date'>01.12.2022</div>
                    <div className='list__weight'>85 kg</div>
                    <div className='list__options'>
                        <div className='list__delete'>Delete</div>
                        <div className='list__update'>Update</div>
                    </div>
                </div>
                <div className='list__item'>
                    <div className='list__date'>01.12.2022</div>
                    <div className='list__weight'>85 kg</div>
                    <div className='list__options'>
                        <div className='list__delete'>Delete</div>
                        <div className='list__update'>Update</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeightLastEntries;
