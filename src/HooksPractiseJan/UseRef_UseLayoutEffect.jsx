import { useEffect, useLayoutEffect, useRef } from "react"

export const UseRef = () => {
    //useRef  1 use: change dom element directly
    //useRef  2 use: call child component function from parent without lifting the state up
    const inputRef = useRef(null);
    const buttonRef = useRef(null);
    const changeInputValue = () => {
        console.log(inputRef.current.value)
        inputRef.current.focus();
        inputRef.current.value = "";

    }
    const updateButtonValue = () => {
        // Change the button value
        buttonRef.current.innerText = "New Value";
    };
    return (
        <div>
            <h1>Pedro</h1>
            <input type="text" placeholder="Example..." ref={inputRef} />
            <button onClick={changeInputValue}>Change Name</button>
            <button ref={buttonRef} onClick={updateButtonValue}> Click me </button>
        </div>
    )

}

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
