import { useEffect, useState } from "react";
import "./SassFiles/Two.scss"

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


export const ObjectIterationsPractise = () =>{
    const objectIterationsPractise = () =>{
        // object iterations javascript
       let obj = {
           "one":"1",
           "two":"2",
           "three":"3",
           "four":"4",
           "five":"5"
       };
       for(const a in obj){
           if(obj.hasOwnProperty(a))
           console.log(`${a} ${obj[a]} forin`)
       }
       const objKeys = Object.keys(obj);
       console.log(objKeys);
       objKeys.forEach((a)=>console.log(a,"keys"));
       const objValues = Object.values(obj);
       console.log(objValues);
       objValues.map((a)=>console.log(a,"values"));

       const objEnteries = Object.entries(obj);
       console.log(objEnteries);
       for (const [key, value] of objEnteries){
           console.log(key, value,"forof")
       }
       objEnteries.forEach(([key, value])=>console.log(key,value,"foreach"))
   }

   return(
    <div>
        <br/>
            <button onClick={objectIterationsPractise}>ObjectIterationsPractise</button>
        <br/><br/>
    </div>
   )
};

export const ArrayIterationsPractise = () =>{

    const arrayBasic = [100,99,98,97,96,95];

    return(
        <div className="btn_timer">PPP</div>
    )
}
