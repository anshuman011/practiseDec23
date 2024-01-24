//Problem: Wissen 
/* Create a countdown timer that will countdown from 30 and update every second.
When the countdown hits 0, display Take Off.
There is a reset button next to the timer.
The reset button will reset the timer to 30 sec if the takeoff has not already happened.
After takeoff, reset is not possible. */

import { useEffect, useState } from "react"


export const CountdownInReact = () => {
    const [counter, setCounter] = useState(10);

    //learn it later , why this also working
    // const [intervalId, setIntervalId] = useState(null); 
    // useEffect(() => {
    //     clearInterval(intervalId);
    //     const timer = setInterval(() => {
    //         setCounter(prev => prev > 0 ? prev - 1 : prev)
    //     }, 1000);
    //     setIntervalId(timer);

    //     return () => {
    //         clearInterval(intervalId);
    //     }
    // }, [counter]);

    // OR

    useEffect(() => {
        const timer = setInterval(() => {
            setCounter(prev => prev > 0 ? prev - 1 : prev)
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    }, [counter]);

    return (
        <div>
            <span>{counter}</span>
            {counter == 0 && <span>Take Off</span>}
            <button onClick={() => {
                if (counter != 0) setCounter(10);
            }}>Reset</button>
        </div>
    )
}
