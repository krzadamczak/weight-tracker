import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { WeightProvider } from "./store/WeightContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <WeightProvider>
                <App />
            </WeightProvider>
        </BrowserRouter>
    </React.StrictMode>
);
