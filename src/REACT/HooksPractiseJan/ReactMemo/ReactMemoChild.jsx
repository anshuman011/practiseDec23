import React from "react"

export const ReactMemoChild = React.memo(({name}) => {
    console.log("child for react memo rerendered")
    return (
        <p>child for react memo {name}</p>
    )
})

//wrap ReactMemoChild in React.memo or
// export const MemoizedReactMemoChild = React.memo(ReactMemoChild);
//import it in parent and use it