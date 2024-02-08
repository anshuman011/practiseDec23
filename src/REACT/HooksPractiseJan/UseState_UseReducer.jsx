//added gtm on 31january for testing
import { useEffect, useReducer, useState } from "react";
// useState
//funtions event passing
// in js we have to grab the dom element and manually update the ui
//react does that automatically everytime a state is changed if useState is used/ie state updates or parentis rerendered
export const UseStateHook = () => {
    let counterJs = 0;
    const [counterReact, setCounterReact] = useState(0)
    const [inputValue, setInputValue] = useState("");
    const incrementJs = () => {
        counterJs = counterJs + 1;
        console.log(counterJs);//1 2 3 4 but react wont render the ui
    }
    const incrementReact = () => {
        // counterReact = counterReact+1;//error: Assignment to constant variable.
        setCounterReact((prev) => prev + 1)
        //react renders ecah element that is using this state
    }
    const inputChangeHanlder = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
        console.log("yes", event.target.value)
    }
    return (
        <div style={{ backgroundColor: "yellow" }}>
            <p>UseState</p>
            {counterJs}
            <button onClick={incrementJs} className="gaTesting1">incrementJS</button>
            {counterReact}
            <button onClick={incrementReact} className="gaTesting2">incrementReact</button>
            {inputValue}
            {/* <input onChange={inputChangeHanlder}/> */}{/* works fine, event auto passed */}
            {/* <input onChange={()=>inputChangeHanlder}/>no error but func not invoked */}
            {/* <input onChange={()=>inputChangeHanlder()}/> */}{/*error:  Cannot read properties of undefined (reading 'target') */}
            <input onChange={(e) => inputChangeHanlder(e)} />{/* works fine, event needs to be passed manually */}
        </div>
    )
}

export const UseReducerHook = () => {
    //an alternate of usestate, for complex state management, react rerenders
    const reducerFunc = (state, action) => {
        //1st argument current value of state, 2nd argument action to take
        switch (action.type) {
            case "INCREMENT":
                return { ...state, count: state.count + 1, } //works
            // return {count: state.count+1, showText: state.showText} //works
            case "toggleShowText":
                return { count: state.count, showText: !state.showText }
            default:
                return state;

        }
    }

    const [state, dispatch] = useReducer(reducerFunc, { count: 0, showText: false });
    // const [a variable that holds the updated states initially equals second argument of usereducer, dispatch function to dispatch action used for similar task as setState] = useReducer(a function holding logic for updating the state, object initial value of state)
    return (
        <div style={{ backgroundColor: "#eeeeee", marginTop: "50px" }}>
            {state.count}
            <button onClick={() => dispatch({ type: "INCREMENT" })}>Click to increment</button>
            {/* <button onClick={dispatch({type:"INCREMENT"})}>
            Click to increment</button>
            //error:Too many re-renders. React limits the number of renders to prevent an infinite loop. */}
            {state.showText && <span>HI SHOW TEXT</span>}
            <button onClick={() => dispatch({ type: "toggleShowText" })}>Click to toggle show text</button>
            <button onClick={() => {
                dispatch({ type: "INCREMENT" });
                dispatch({ type: "toggleShowText" })
            }}>Common Button TO Increment aand toggle show text</button>
        </div>
    )
}






