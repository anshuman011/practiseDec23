import { useEffect } from "react"

export const UseCallBackChild = ({findLongestName}) =>{
    //here the UseCallBackChild rerenders again and again, everytime the parent component is rerendered
    //we have passed 
    useEffect(()=>{
        console.log("Use Call Back Child Ran")
    },[findLongestName])

    return(
        <div>
            {/* {findLongestName({})} */}
        </div>
    )
    
}