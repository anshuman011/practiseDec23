import { useState, useEffect } from "react";

export const UseEffectHook = () => {
    /* use: for side-effects like api calls, timers,etc
    use: to mimic componentDidMount,componentDidUpdate,componentWillUnmount
    use: cleanup effects
    return statement:
    The return statement of this hook is used to clean methods that are already running, such as timers.
    The first time this hook is called, only its main body is the one that is going to be evaluated.
    All other subsequent times the hook is called, the return statement will be evaluated first, and, after
    that, the hook's main body.
    Also when component unmounts, only this return statement runs, not the useEffect body, dependency or empty
    array in both cases this happens.
    "else we get error:cant perform a react state update on unmounted component...memory leak"
    This behaviour is especially useful for 
    cleaning code that is already running before run it again, which enable us to prevent memory leaks. */
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
            //checked.
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