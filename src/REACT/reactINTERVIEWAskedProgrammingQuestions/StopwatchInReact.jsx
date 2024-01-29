//Question: Stopwatch that starts , stops , resumes and resets on button clicks.
// stopwatch app : start +1/sec pause stops resume again +1/sec reset resets to 0

import { useState, useEffect } from "react";
import '../../SassFiles/Two.scss';

export const StopwatchInReact = () => {
    const [currentTime, setCurrentTime] = useState(0);
    // const [isTimerOn, setIsTimerOn] = useState(false);
    const [intervalId, setIntervalId ] = useState(null);

    const startInterval = () =>{
        console.log(intervalId)
        clearInterval(intervalId);
        const timer = setInterval(() => {
            setCurrentTime((prev)=>prev+1)
        }, 1000);
        setIntervalId(timer);
    }
    const stopInterval = () =>{
        console.log(intervalId)
        clearInterval(intervalId);
        setIntervalId(null);
    }

    useEffect(() => {
        return () => {
            clearInterval(intervalId);
        };
    }, []); 

    console.log(intervalId)
    return(
        <div>
            <p>{currentTime}</p>
            <button className="btn_timer" onClick={startInterval}>Start</button>
            <button onClick={stopInterval}>Stop</button>
            <button onClick={startInterval}>Resume</button>
            <button onClick={()=>setCurrentTime(0)}>Reset</button>
            <button onClick={()=>setCurrentTime((prev)=>prev+5)}>+5</button>
        </div>
    )
}