import { useEffect, useState } from "react";
import '../SassFiles/Two.scss';

export const TwoStopWatch = () =>{

    //stopwatch starts
    const [count, setCount] = useState(0);
    const [isTimerOn, setIsTimerOn] = useState(false);

    useEffect(()=>{
        console.log(isTimerOn)
        let interval;
        if(isTimerOn){
            interval = setInterval(() => {
                setCount((prev)=>prev+1)
            }, 1000);
        }
        return () => clearInterval(interval);
    },[isTimerOn])
    //stopwatch ends
    return(
        <div className="">
            {/* stopwatch starts */}
            <span className="btn_timer">{count}</span>
            <br/>
            <button className="btn_stopwatch" onClick={()=>{
                setIsTimerOn(true);
            }}>Start</button>
            <button className="btn_stopwatch" onClick={()=>{
               setIsTimerOn(false);
            }}>Pause</button>
            <button className="btn_stopwatch" onClick={()=>{
                setIsTimerOn(true);
            }}>Resume</button>
            <button className="btn_stopwatch" onClick={()=>{
                setIsTimerOn(false);
                setCount(0);
            }}>Reset</button>
            {/* stopwatch ends */}
        </div>
    );
};

