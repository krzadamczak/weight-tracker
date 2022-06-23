import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { classNameFunction } from "../../utils/index";

const Navigation = () => {
    return (
        <nav className='nav'>
            <NavLink className={classNameFunction} to='/'>
                Home
            </NavLink>
            <NavLink className={classNameFunction} to='/bmi-calculator'>
                Calculate your BMI!
            </NavLink>
        </nav>
    );
};

export default Navigation;
