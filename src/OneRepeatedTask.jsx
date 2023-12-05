import { useEffect } from "react";

const OneRepeatedTask = () => {

    useEffect(() => {
        // Start the interval when the component is mounted
        const interval = setInterval(doSomthing, 50000);
        // Clear the interval when the component is unmounted to prevent memory leaks
        return () => {
            clearInterval(interval);
        }
    }, []);

    const doSomthing = () => {
        console.log("000")
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json))
    }

    return (
        <p></p>
    )
};

export default OneRepeatedTask;