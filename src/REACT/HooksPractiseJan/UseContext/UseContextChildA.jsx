import { useContext } from "react"
import { AppContext } from "./UseContextParent"

export const UseContextChildA = ({ children }) => {
    const { setUserName } = useContext(AppContext);
    return (
        <div>
            <input onChange={(event) => { setUserName(event.target.value) }} />
            <p>{children}</p>
        </div>
    )
}