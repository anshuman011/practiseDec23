import { useRef, useEffect } from "react"
import { UseImeperativeHandleChild } from "./UseImperativeHandleChild";

export const UseImeperativeHandleParent = () => {

    const refChild = useRef();
    useEffect(() => {
        //not working do later //pending
        //Log the child value in the useEffect to ensure it's captured after rendering
        console.log("Child Value from Parent:", refChild.current.getValueFromChild());
      }, [refChild.current]);
    return (
        <div>
            <button onClick={() => { refChild.current.alterToggle() }}>Button From Parent</button>
            <UseImeperativeHandleChild ref={refChild} />
        </div>
    )
}