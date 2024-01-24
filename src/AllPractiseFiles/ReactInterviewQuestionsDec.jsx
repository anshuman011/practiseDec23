import React, { useEffect } from "react";

export const Program3 = () => {
    const arr = [1, 2, 3, 4, 5];
    const sumRequired = 6;
    const sumPossible = (arr, sumRequired) => {
        let result;
        arr.forEach((a, index) => {
            let newArr = [...arr];
            let total = a;
            let totalElementsUsed = 1;
            newArr = newArr.slice(index + 1);
            newArr.forEach((i, index1) => {
                total += i;
                totalElementsUsed++;
                if (total == sumRequired) {
                    console.log(newArr, i, index1, total, totalElementsUsed);
                    result = {
                        total,
                        totalElementsUsed
                    }
                }
            });
        });
        return result;
    }
    const result = sumPossible(arr, sumRequired);
    console.log(result);
    if (result) {
        console.log(result.totalElementsUsed, "yes")
    }
    else {
        console.log("No")
    }

    return (<div>
    </div>)
};

export const Program5 = () => {
    //capgem L2 13dec
    const varSetTimeOut = () => {
        var array = [1, 2, 3, 4, 5];
        console.log(array.length);
        for (var i = 0; i < array.length; i++) {
            console.log(i);
            setTimeout(() => {
                console.log(i);
                console.log(array[i]);
            }, 1000);
        }
    };
    // varSetTimeOut();

    const letSetTimeOut = () => {
        var array = [1, 2, 3, 4, 5];
        console.log(array.length);
        var array = [1, 2, 3, 4, 5];
        for (let i = 0; i < array.length; i++) {
            console.log(i);
            setTimeout(() => {
                console.log(i);
                console.log(array[i]);
            }, 1000);
        }
    };
    // letSetTimeOut();

    const extraArrElement = () => {
        // var a = [1, 2, 3];
        let a = [1, 2, 3];
        a[10] = 99;

        console.log(a[5], a[10], a.length);
    };
    // extraArrElement();

    // const customHook = (params) =>{
    //     useEffect(()=>{
    // },[]);
    // return 
    // }
    // customHook(params);

    // [1,2,3,4,5].filter((item) => {
    //       if(item > 3){
    //           return 'abc'
    //       } 
    //        return 'def'
    // })

    // [2:07 PM] Manish Bana
    // const obj = {
    //     name: 'ABC'
    //     print:() => { console.log(this.name)}
    // }

    // obj.print()


    // const input = "abbcddeee";

    // const counter = (input) => {
    //     let finalCount = '';
    //     for (let i = 0; i < input.length; i++) {
    //         console.log(input[i], "ooooo");
    //         let singleChar = input[i];
    //         let count = 0
    //         for (let j = 0; j < input.length; j++) {
    //             if (singleChar == input[j]) {
    //                 count++;
    //             };
    //         };
    //         if (finalCount.indexOf(singleChar) == -1) {
    //             finalCount = finalCount + input[i] + count;
    //         };
    //     };
    //     console.log(finalCount)
    // };

    // counter(input);


    // import React, { useState } from 'react';
    // import { createRoot } from 'react-dom/client';

    // function WeatherDashboard() {
    //     // instead of requesting data from an API, use this mock data
    //     const mockWeatherData = {
    //         'New York': {
    //             temperature: '22°C',
    //             humidity: '56%',
    //             windSpeed: '15 km/h'
    //         },
    //         'Los Angeles': {
    //             temperature: '27°C',
    //             humidity: '45%',
    //             windSpeed: '10 km/h',
    //         },
    //         'London': {
    //             temperature: '15°C',
    //             humidity: '70%',
    //             windSpeed: '20 km/h'
    //         },
    //     };

    //     const [searchInput, setSearchInput] = useState("");
    //     const [currentCity, setCurrentCity] = useState("");
    //     const [currentCityData, setCurrentCityData] = useState({});
    //     const [allPreviousCities, setAllPreviousCities] = useState([]);

    //     const searchForCity = (searchForCurrentCity) => {
    //         setCurrentCity(searchForCurrentCity);
    //         if (allPreviousCities.indexOf(searchForCurrentCity) == -1) {
    //             allPreviousCities.push(searchForCurrentCity);
    //         }
    //         setCurrentCityData({})
    //         Object.keys(mockWeatherData).map((singleCity) => {
    //             if (singleCity == searchForCurrentCity) {
    //                 setCurrentCityData(() => mockWeatherData[singleCity]);
    //             }
    //         })
    //     }



    //     return (
    //         <div>
    //             <input type="text" id="citySearch" placeholder="Search for a city..."
    //                 onChange={(e) => setSearchInput(e.target.value)} />
    //             <button id="searchButton" onClick={() => searchForCity(searchInput)}>Search</button>
    //             <div id="weatherData">
    //                 {currentCity.length != 0
    //                     && Object.keys(currentCityData).length != 0
    //                     &&
    //                     <div>
    //                         <div>Temperature: {currentCityData.temperature}</div>
    //                         <div>Humidity: {currentCityData.humidity}</div>
    //                         <div>Wind Speed: {currentCityData.windSpeed}</div>
    //                     </div>
    //                 }
    //                 {currentCity.length != 0 &&
    //                     Object.keys(currentCityData).length == 0 &&
    //                     <div>City not found.</div>
    //                 }
    //             </div>
    //             <div id="previousSearches">{
    //                 allPreviousCities.map((singleCity, key) => {
    //                     return (
    //                         <div key={key}>
    //                             <br />
    //                             <button onClick={() => searchForCity(singleCity)}>{singleCity}</button>
    //                         </div>
    //                     )
    //                 }
    //                 )
    //             }</div>
    //         </div>
    //     );
    // }

    // const container = document.getElementById('root');
    // const root = createRoot(container);
    // root.render(<WeatherDashboard />);

    //     input abbcddeee
    // output a1b2c1d2e3

    //     var a = 11111;
    //     function test() {
    //         console.log(a);
    //         var a = 333333;
    //     }
    //     test();


    //     var a = 11111;
    //     function test() {
    //         console.log(a);
    //         var a = 333333;
    //     }
    //     test();
    // Gaurav Prajapati2: 30 PM
    // for(var i=0;i<5;i++){
    //     setTimeout(()=>console.log(i),100);
    // }
    // Gaurav Prajapati2:34 PM
    // INPUT: [ 5, "1","a", 3, 4, 5, 7, 8, 9, 5, 3, 6]
    // unique no OUTPUT: [ 5, 1, 3, 4, 7, 8, 9, 6]
    // Gaurav Prajapati2:45 PM
    // const parent = () => {
    // const clichHandler = () => {
    // //access child's function
    // }
    // return <>
    // <child/>
    // <button onClick={clichHandler} />
    // </>s
    // }
    // const child = ()=> {

    // const countFunc = () =>{
    // console.log("childs func")
    // }
    // return <> </>
    // }



    // fn([p1,p2,p3,p4] =n, 3=m)
    // 	- return Promise
    // 		- resolve if in when we find m promises getting resolved out of the n promises passed
    // 		- reject - if you find any rejection before m promises are resolved


    // p1 --> 10
    // p2       15
    // p3       100
    // p4       50 ------> resolve


    // p1 -->            10
    // p2    rejected   15 ---> reject
    // p3                  100
    // p4                   50


    // var variable = 10;

    // (()=>{

    //   console.log(variable);

    //   var variable = 20;

    //   console.log(variable);

    // })();

    // console.log(variable);

    // var variable = 30;
    // ...........

    // var variable = 10;

    // (()=>{

    //   console.log(variable);

    //   let variable = 20;

    //   console.log(variable);

    // })();

    // console.log(variable);

    // var variable = 30;
    // ........
    // setImmediate(()=>{

    //     console.log('from setImmediate')

    // });

    // setTimeout(()=>{

    //     console.log('from setTimeout')

    // },0);

    // new Promise(resolve=>{

    //     console.log('From promise')

    //     resolve();

    // });

    // setTimeout(()=>{

    //     console.log('from setTimeout from 1 millisecond')

    // },1);


    // var notesList = [];
    // var lists = document.getElementById("list");
    // var inputs = document.getElementById("input");
    // var alerts = document.getElementById("alert");
    // var buttons = document.getElementById("button");

    // if(notesList.length == 0){
    //   alerts.style.display = "none";
    // }

    // buttons.addEventListener("click", function(){ 
    //   if(inputs.value == "" || inputs.value.trim().length === 0 ){
    //   alerts.style.display = "block";
    //   console.log(inputs.value)
    //   }
    //   else{  
    //     console.log(inputs.value)
    //     notesList.push(inputs.value)
    //     alerts.style.display = "none" 
    //     console.log(notesList)
    //     inputs.value = ""
    //     listShow()
    //   }
    // ;
    // })


    // function listShow(){
    // notesList.map((listOne)=>{
    //   lists.innerHTML = "aaa"
    // })
    // }

    // console.log(x);
    // var x = "test";

    // setTImeout(function(){
    //     console.log("inside");
    //    }, 0);
    //    console.log("outside");

};
