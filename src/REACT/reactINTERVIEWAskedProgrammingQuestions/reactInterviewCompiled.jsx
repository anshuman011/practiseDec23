import { useEffect, useState } from "react";

export const PrintNumberAfterEverySecond = () => {
    //Question: print 1 after 1 second 2 after 2 seconds, etc.
    const [number, setNumber] = useState(1);
    useEffect(() => {
        // console.log("first")
        let timer = setInterval(() => {
            setNumber(prev => prev + 1)
        }, number * 1000);
        return () => {
            console.log("second")
            clearInterval(timer)
        }
    }, [number])

    return <p>{number}</p>
}
