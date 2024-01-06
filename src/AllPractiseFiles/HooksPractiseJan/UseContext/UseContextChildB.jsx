import { useContext } from "react"
import { AppContext } from "./UseContextParent"

export const UseContextChildB = () =>{
    const {userName} = useContext(AppContext)
    return(
        <p>Value updated in child B from child A: {userName}</p>
    )
}