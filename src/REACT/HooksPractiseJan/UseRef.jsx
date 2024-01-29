import { useRef } from "react";
export const UseRef = () => {
    // useRef is a hook which returns an object with a current property set to the value passed to the hook.
    // const numberRef = useRef(0);=>{current: 0};// numberRef.current holds the value 0
    // This object is mutable so the current property can be changed.
    // Importantly this object exists outside of React’s render cycle, so the value persists throughout a components lifecycle.
    // everytime we change a DOM node (Using document.querySelector() etc.), the whole DOM tree needs to be re-rendered. 
    //useRef  1 use: interact directly with DOM nodes outside of React’s management of the Virtual DOM 
        // called React describes this an ‘escape hatch’.
    //useRef  2 use: call child component function from parent without lifting the state up,see useimperativehandle
    //useRef 3 use: access child state using,see useimperativehandle
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
