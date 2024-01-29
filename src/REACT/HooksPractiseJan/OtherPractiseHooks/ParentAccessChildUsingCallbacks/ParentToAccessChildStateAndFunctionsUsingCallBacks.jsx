import { useState } from "react"
import { ChildToLetParentAccessChildStateAndFunctionsUsingCallBacks } from "./ChildToLetParentAccessChildStateAndFunctionsUsingCallBacks"

export const ParentToAccessChildStateAndFunctionsUsingCallBacks = () =>{
    const [parentState, setParentState] = useState(null);
    const handleChildStateChange = (newState) => {
        setParentState(newState);
      };
    const callChildFunctionFromParent =()=>{
        console.log("Child Function called from parent");
    }
    return(
        <div>
        <ChildToLetParentAccessChildStateAndFunctionsUsingCallBacks 
        handleChildStateChange={handleChildStateChange}
        callChildFunctionFromParent={callChildFunctionFromParent}
        /><br/>
        <p>Parent Component having value from child cmp: {parentState}</p>
        {/* <button onClick={()=>parentState()}>Click To Updated From Parent Using Callbacks</button> */}
        </div>
    )
}