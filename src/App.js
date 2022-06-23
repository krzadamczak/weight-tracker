import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import { BmiForm } from "./features/BmiForm/BmiForm";
import Home from "./pages/Home/Home";

function App() {
    return (
        <div className='app'>
            <Navigation />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/bmi-calculator' element={<BmiForm />} />
                {/* <BmiForm /> */}
            </Routes>
        </div>
    );
}

export default App;
