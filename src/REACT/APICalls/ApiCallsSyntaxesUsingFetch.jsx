import { useEffect } from "react";
import { useState } from "react"

export const ApiCallsSyntaxesUsingFetch = () => {
    const [data, setData] = useState();
    // useEffect(() => {
    //     get
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //         .then((response) => response.json())
    //         .then((response) => setData(response))
    //         .catch((err) => console.log(err))
    // }, []);

    console.log(data);
    // const handleApiCall = () => {
    //     // post
    //     fetch("https://jsonplaceholder.typicode.com/posts", {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': "application/json",
    //             // 'Authorization': `Bearer ${accessToken}`,
    //         },
    //         body: JSON.stringify({

    //         })
    //     })
    //         .then((response) => {
    //             //  Check if the request was successful (status code 2xx)
    //             // console.log(response)
    //             if (!response.ok) {
    //                 throw new Error(`HTTP error! Status: ${response.status}`);
    //             }
    //             // Parse the response JSON
    //             return response.json();
    //         })
    //         .then((response) => setData(response))
    //         .catch((err) => console.log(err))
    // }

    return (<div>
        {/* <button onClick={handleApiCall}>Make API Call</button> */}
    </div>)
}