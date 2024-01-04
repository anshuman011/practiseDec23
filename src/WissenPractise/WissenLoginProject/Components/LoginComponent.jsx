import { useEffect, useState } from 'react';
import './LoginComponent.scss';

const LoginComponent = () => {

    const [authToken, setAuthToken] = useState("");
    const [userList, setUserList] =useState();
    const url = "https://reqres.in/api/login";
    const data = {
        email: "eve.holt@reqres.in",
        password: "cityslicka"
    };

    const requestOptions = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    };

    useEffect(() => {
        fetch(url, requestOptions)
            .then(res => res.json()).then(res => setAuthToken(res.token)).catch(err => console.log(err));
    }, []);

    useEffect(() => {
        if (authToken.length != 0) {
            console.log("yes");
            fetch("https://reqres.in/api/users", {
                headers: {
                    'Authorization': 'Bearer <token>',
                    'Content-type': 'application/json'
                }
            }).then(res=> res.json()).then(res=>setUserList(res.data));
        }
    }, [authToken]);

    console.log(authToken,userList, typeof userList);

    return (
        <div className='login_component_container'>
            {userList != undefined && userList.map((a)=>{
                console.log(a);
                return(
                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", height:"150px"}}>
                        <p>ID: {a.id}</p>
                        <p>First Name: {a.first_name}</p>
                        <p>Last Name: {a.last_name}</p>
                        <p>Email : {a.email}</p>
                        <img style={{height:"100px", width:"100px"}} src={a.avatar}/>
                    </div>
                );
            })}
        </div>
    );
};

export default LoginComponent;