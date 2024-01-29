import { useState, createContext } from "react"
import { UseContextChildA } from "./UseContextChildA"
import { UseContextChildB } from "./UseContextChildB"

//use 1: props drilling , all childs have access to context created in parent, whole parent component tree
//use 2: Parent has 2 childs or more, child A updates value in child B , state is in parent
//Drawback: when context value is updated then all the child components which are using useContext hook to
//subscibe to this context will get re-rendered for sure. those not using wont.

export const AppContext = createContext(null);

export const UseContextParent = () => {

    const [userName, setUserName] = useState("");
    return (
        <div>
            <AppContext.Provider value={{ userName, setUserName }}>
                <UseContextChildA>Button from child A to update value in child b ,as children</UseContextChildA>
                <UseContextChildB></UseContextChildB>
            </AppContext.Provider>
        </div>
    )
}