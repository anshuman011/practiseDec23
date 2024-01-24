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
            {/* <ReactMemoChild name={name}/>  Rerenders everytime parent is rerendered ,even if name is not changed, if ReactMemo is not used */}
            {/* <ReactMemoChild />//Now not rerenders everytime parent is rerendered as ReactMemo is used */}
            <ReactMemoChild name={name} />
            {/* Now not rerenders everytime parent is rerendered as ReactMemo is used, but rerenders when actual
            passed prop (name) is changed. */}
        </div>
    )
}

//pitfalls:
// const data = { test: 'data' }; and < TileMemo data = { data } />
// in case the prop passed is an object property, The data variable is being re - declared on every update of App.
// This leads to the objects not actually being the same because they have different references.
// The reason React.memo doesn't work anymore is because it only does a shallow comparison of the 
// component's properties.
// solution:
// React.memo accepts a second areEqual function, which we can use to control when the component should update.
// const TileMemo = React.memo(() => {
//     let updates = React.useRef(0);
//     return (
//         <div className="black-tile">
//             <Updates updates={updates.current++} />
//         </div>
//     );
// }, (prevProps, nextProps) => {
//     if (prevProps.data.test === nextProps.data.test) {
//         return true; // props are equal
//     }
//     return false; // props are not equal -> update the component
// });
// OR
/* As an alternative to this, you can wrap the object in React.useMemo(), which 
will memoize the variable and not create a new object.
const data = React.useMemo(() => ({
  test: 'data',
}), []); */
// In JavaScript, functions behave just like objects, so same refrence issue
// const onClick = () => {
//     console.log('click');
// };
// <TileMemo onClick={onClick} />
// const onClick = React.useCallback(() => {
//     console.log('click');
// }, []);
// why not wrap all component with React.memo()-   explicitly caches the function, which means that it stores the 
// result (VDOM) in memory.this leads to more memory consumption
// _______________________________________________
_