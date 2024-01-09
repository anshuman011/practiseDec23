import { useEffect, useState, useMemo, useCallback } from "react";
import { UseCallBackChild } from "./UseCallBackChild";

export const UseMemo_UseCallBackParent = () => {

    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments", {
            method: "GET" //optional
        })
            .then((response) => response.json())
            .then(res => setData(res))
    }, [])

    const findLongestName = (comments) => {
        if (!comments) return null;
        let longestName = "";
        for (let i = 0; i < comments.length; i++) {
            let currentName = comments[i].name;
            if (currentName.length > longestName.length) {
                longestName = currentName;
            }
        }
        console.log("expensive function was computed ")
        return longestName;
    }

    const getLongestNameFuncMemoizedUsingUseMemo = useMemo(() => { findLongestName(data) }, [data])
    const getLongestNameFuncMemoizedUsingUseCallBack = useCallback(() => findLongestName(data), [data])
    //expensive function and dependency array

    return (
        <div>
            {/* <p>{findLongestName(data)} </p> 
            direct call was recalculating the values on each related unrelated renders */}
            <p>{getLongestNameFuncMemoizedUsingUseMemo}</p>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            {toggle && <p>toggle is on</p>}
            {/* <UseCallBackChild findLongestName={findLongestName}/> */}
            {/* when passing the expensive function as props , the child will get rerendered again and again on toggle
            in the parent as function is being recreated on each rerender of the parent and a new referenc is passed
            to the child thus rerendering the child , here useCallBack is used to avoid the situation as below*/}
            <UseCallBackChild findLongestName={getLongestNameFuncMemoizedUsingUseCallBack}/>
            {/* now child has stopped rerendering */}
        </div>

    )

}

