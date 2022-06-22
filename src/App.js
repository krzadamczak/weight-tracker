import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import { BmiForm } from "./features/BmiForm/BmiForm";
import Home from "./pages/Home";

function App() {
    return (
        <div className='app'>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/bmi-calculator'>Calculate your BMI!</NavLink>
            </nav>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/bmi-calculator' element={<BmiForm />} />
                {/* <BmiForm /> */}
            </Routes>
        </div>
    );
}

export default App;
