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
            <button onClick={incrementJs}>incrementJS</button>
            {counterReact}
            <button onClick={incrementReact}>incrementReact</button>
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
            {/* <button onClick={dispatch({type:"INCREMENT"})}>Click to increment</button>//error:Too many re-renders. React limits the number of renders to prevent an infinite loop. */}
            {state.showText && <span>HI SHOW TEXT</span>}
            <button onClick={() => dispatch({ type: "toggleShowText" })}>Click to toggle show text</button>
            <button onClick={() => {
                dispatch({ type: "INCREMENT" });
                dispatch({ type: "toggleShowText" })
            }}>Common Button TO Increment aand toggle show text</button>
        </div>
    )
}

export const UseEffectHook = () => {
    //use: for side-effects like api calls, timers,etc
    //use: to mimic componentDidMount,componentDidUpdate,componentWillUnmount
    //use: cleanup effects
    // The return statement of this hook is used to clean methods that are already running, such as timers.
    // The first time this hook is called, its main body is the one that is going to be evaluated first.
    // All other subsequent times the hook is called, the return statement will be evaluated first, and, after
    // that, the hook's main body.
    // Also when component unmounts, only this return statement runs, not the useEffect body.
    // This behaviour is especially useful for 
    // cleaning code that is already running before run it again, which enable us to prevent memory leaks.
    //dependency array can have state as well as props.
    const [toCheckUseEffectsRerendering, setToCheckUseEffectsRerendering] = useState(0);
    const [useEffectWithoutDepenedencyArr, setUseEffectWithoutDepenedencyArr] = useState(0);
    const [useEffectWithEmptyDepenedencyArr, setUseEffectWithEmptyDepenedencyArr] = useState(0);
    const [useEffectWithVariableInDepenedencyArr, setUseEffectWithVariableInDepenedencyArr] = useState(0);
    
    useEffect(()=>{
        //every time page renders
        // setUseEffectWithoutDepenedencyArr((prev)=>prev+1);
        console.log("setUseEffectWithoutDepenedencyArr 1")
    })
    
    useEffect(()=>{
        //only when first time the page is rendered
        setUseEffectWithEmptyDepenedencyArr((prev)=>prev+1);
        console.log("setUseEffectWithEmptyDepenedencyArr 2")
    },[])
    
    useEffect(()=>{
        //only when first time the page is rendered plus everytime the variable in dependency variable is updated
        setUseEffectWithVariableInDepenedencyArr((prev)=>prev+1);
        console.log("setUseEffectWithVariableInDepenedencyArr 3")

        return () =>{
            //cheched.
            console.log("clean up ran first")
        }

    },[toCheckUseEffectsRerendering /* ,other variables go here */])
    return (
    <div style={{ backgroundColor: "#666666", marginTop: "50px" }}>
        <p>useEffect Without Dependency Array: {useEffectWithoutDepenedencyArr}</p>
        <p>useEffect with Empty Dependency Array: {useEffectWithEmptyDepenedencyArr}</p>
        <p>useEffect with variable in dependency array: {useEffectWithVariableInDepenedencyArr}</p>
        {toCheckUseEffectsRerendering}
        {/* <button onClick={setToCheckUseEffectsRerendering((prev)=>prev+1)}>To Show Use Effect Working</button> */}
        {/* error: Too many re-renders. React limits the number of renders to prevent an infinite loop. */}
        <button onClick={()=>setToCheckUseEffectsRerendering((prev)=>prev+1)}>To Show Use Effect Working</button>
    </div>)
}




