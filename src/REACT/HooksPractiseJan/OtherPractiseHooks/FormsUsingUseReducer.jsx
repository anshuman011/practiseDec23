// https://medium.com/swlh/usereducer-form-example-16675fa60229
import { useReducer, useState } from "react";

export const FormsUsingUseReducer = () => {
    const initialFormState = {
        name: "",
        password: "",
        hasConsented: false
    }
    const handleFormInputs = (e) => {
        dispatch({
            type: "HANDLE INPUT UPDATE",
            field: e.target.name,
            payload: e.target.value,
        })
    }
    const reducerFunForForm = (state, action) => {
        switch (action.type) {
            case "HANDLE INPUT UPDATE":
                return { ...state, [action.field]: action.payload };
            case "TOGGLE CONSENT":
                return { ...state, hasConsented: !state.hasConsented };
            default:
                return state;
        }

    }
    const [formState, dispatch] = useReducer(reducerFunForForm, initialFormState);
    console.log(formState);
    return (
        <div>
            <form>
                <label> Username:
                    <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={(e) => handleFormInputs(e)} />
                </label>
                <br />
                <label> Password:
                    <input
                        type="password"
                        name="password"
                        value={formState.password}
                        onChange={(e) => handleFormInputs(e)} />
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="name"
                        value={formState.hasConsented}
                        onChange={() => dispatch({ type: "TOGGLE CONSENT" })} />
                    Select to give consent
                </label>
            </form>
        </div>
    );
}