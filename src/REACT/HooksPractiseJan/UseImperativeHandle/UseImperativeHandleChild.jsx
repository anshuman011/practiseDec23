import { forwardRef, useImperativeHandle, useState } from "react"

export const UseImeperativeHandleChild = forwardRef((props, ref) => {
    const [toggle, setToggle] = useState(false);
    //use 1: access child state (2nd way using callbacks), access child functions
    //to call a function defined in child component we use useImperativeHandle and useRef 
    //useImperativeHandle allows to define functions on a ref, these functions can be called in the component that has the ref defined
    //helps in not lifting up the state to parent everytime
    //we cant directly referenc functional component directly, we use forwardRef which allows child to accept a ref from parent, for normal html elements its allowed
    //1st is ref and 2nd is create a function which returns an object
    useImperativeHandle(ref, () => (
        {
            alterToggle() {
                setToggle(!toggle)
            },
            getValueFromChild(){
                return toggle ? "true": "false";
            }
        }
    )
    )

    return (
        <div>
            <button
                /* onClick={() => {
                    setToggle(!toggle)
                }} */>Button from child
            </button>
            {toggle && <span>ToggleTrue</span>}
        </div>
    )

});