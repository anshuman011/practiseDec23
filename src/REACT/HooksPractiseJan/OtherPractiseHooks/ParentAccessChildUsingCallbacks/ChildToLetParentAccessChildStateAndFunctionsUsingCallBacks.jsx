import { useEffect, useState } from "react"
//pending
export const ChildToLetParentAccessChildStateAndFunctionsUsingCallBacks = ({handleChildStateChange,callChildFunctionFromParent}) =>{
    const [state, setState] = useState("This is old value from child");
    const updateChildState = () =>{
        setState("This is new value updated from Parent")
    };

    useEffect(()=>{
        console.log(state);
        handleChildStateChange(state);
    },[state]);

    return(
        <button onClick={()=>setState((prev)=>`${prev+1}`)}>Click To Updated From Child</button>
    )
}