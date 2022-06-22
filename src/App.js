import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import { BmiForm } from "./features/BmiForm/BmiForm";

function App() {
    return (
        <div className='App'>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/bmi-calculator'>Calculate your BMI!</NavLink>
            </nav>
            <Routes>
                <Route path='/bmi-calculator' element={<BmiForm />}></Route>
                {/* <BmiForm /> */}
            </Routes>
        </div>
    );
}

export default App;
