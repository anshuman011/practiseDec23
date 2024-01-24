import { useEffect, useLayoutEffect, useRef } from "react"


export const UseLayoutEffect = () => {
    //useLayouteffect is called before useEffect
    //called before everything is printed on the ui
    //mostly ui based
    const inputRef = useRef(null);
    useLayoutEffect(() => {
        console.log("uselayouteffect called", inputRef.current.value)
    }, []);
    useEffect(() => {
        //after everything is rendered on page
        console.log("useeffect called", inputRef.current.value)
        inputRef.current.value = "HELLO";
        console.log("useeffect called", inputRef.current.value)
    }, []);

    const changeRefValue = (event) => {
        // Update the input value using the event value
        inputRef.current.value = event.target.value;
    };
    return (
        <div>
            <input ref={inputRef} value="PEDRO" onChange={(event) => changeRefValue(event)} />
        </div>
    )
}
