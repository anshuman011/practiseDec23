import { useState } from "react"
import { ReactMemoChild } from "./ReactMemoChild"

export const ReactMemoParent = () => {
    const [toggle, setToggle] = useState(false);
    const [name, setName] = useState("abc");
    console.log("parent for react memo rerendered")
    return (
        <div>
            <button onClick={() => setToggle(!toggle)}>Toggle To Show Use Of ReactMemo</button>
            {toggle && <p>TOGGLED</p>}
            {/* <ReactMemoChild />  Rerenders everytime parent is rerendered , if ReactMemo is not used */}
            {/* <ReactMemoChild name={name}/>  Rerenders everytime parent is rerendered , if ReactMemo is not used */}
            {/* <ReactMemoChild />//Now not rerenders everytime parent is rerendered as ReactMemo is used */}
            <ReactMemoChild name={name}/>
            {/* Now not rerenders everytime parent is rerendered as ReactMemo is used, but rerenders when actual
            passed prop (name) is changed. */}
        </div>
    )   
}