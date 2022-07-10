import React from "react";
import { useReducer, useContext } from "react";

const weightInitialState = { addEntry: () => {}, init: () => {}, data: [] };

const WeightContext = React.createContext(weightInitialState);

export function useWeightContext() {
    return useContext(WeightContext);
}

//Dlaczego console.log pojawia się dwa razy?
//Wynika to z komponenty <React.StrictMode>. W produkcji problem nie powinien występować.
//Podwójne wywołanie może się również pojawiać jeżeli reducer modyfikuje stan bezpośrednio (pure/inpure, mutable/immutable)
const weightReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ENTRY": {
            const data = [{ ...action.payload }, ...state.data];
            localStorage.setItem("data", JSON.stringify(data));
            return { ...state, data };
        }
        case "REMOVE_ENTRY": {
            const data = [...state.data.filter((item) => item.id !== action.payload)];
            localStorage.setItem("data", JSON.stringify(data));
            return { ...state, data };
        }
        case "UPDATE_ENTRY": {
            const indexToUpdate = state.data.findIndex((item) => item.id === action.payload.id);
            const data = [
                (state.data[indexToUpdate] = { ...state.data[indexToUpdate], weight: action.payload.weight }),
            ];
            localStorage.setItem("data", JSON.stringify(data));
            return {
                ...state,
                data,
            };
        }

        case "INIT":
            const rawData = localStorage.getItem("data");
            const data = JSON.parse(rawData);
            if (data != null) {
                return { ...state, data };
            } else {
                localStorage.setItem("data", JSON.stringify([]));
                return { ...state };
            }
        default:
            console.log("There is no such action.");
            break;
    }
};
export const WeightProvider = (props) => {
    const [weightState, dispatchWeightAction] = useReducer(weightReducer, weightInitialState);

    const addEntry = (entry) => {
        dispatchWeightAction({ type: "ADD_ENTRY", payload: { id: entry.id, weight: entry.weight, date: entry.date } });
    };
    const removeEntry = (id) => {
        dispatchWeightAction({ type: "REMOVE_ENTRY", payload: id });
    };
    const updateEntry = (entry) => {
        console.log("entry", entry);
        dispatchWeightAction({ type: "UPDATE_ENTRY", payload: { id: entry.id, weight: entry.weight } });
    };
    const init = () => {
        dispatchWeightAction({ type: "INIT" });
    };

    const value = { addEntry, removeEntry, updateEntry, init, weightState };

    return <WeightContext.Provider value={value}>{props.children}</WeightContext.Provider>;
};
