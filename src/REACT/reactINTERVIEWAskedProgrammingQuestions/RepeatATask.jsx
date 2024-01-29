import { useEffect, useState } from "react"


//Question: Repeat a task after n seconds.
export const RepeatATask = () => {
    const [name, setName] = useState("");
    const [nameList, setNameList] = useState(["aaa", "bbb", "ccc", "ddd"]);
    const doRepeatedTask = () => {
        const randomIndex = Math.floor(Math.random() * 4);
        setName(nameList[randomIndex]);
    }
    useEffect(() => {
        const timer = setInterval(() => {
            doRepeatedTask();
            console.log("interval applied")
        }, 5000);
        return () => {
            console.log("interval cleared")
            clearInterval(timer);
        }
    }, [])
    return (
        <div>
            <p>Hey, {name} </p>
        </div>
    )
}