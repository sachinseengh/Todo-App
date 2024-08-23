import {BrowserRouter,Link,Route,Routes,useNavigate,useParams} from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from './security/AuthContext';
import { executeBasicAuth } from './api/HelloWorldService';
import { apiClient } from './api/ApiClient';

export default function LoginComponent(){

    const [username,setUsername] = useState("admin");
    const [password,setPassword] = useState("");


    const [error,setError] = useState(false);


    const authContext = useAuth();

    function handleUsername(event){
        setUsername(event.target.value);

    }
    function handlePassword(event){
        setPassword(event.target.value);
    }
    const navigate = useNavigate();

    // function authenticate(){
    // if(username === "admin" && password === "admins"){
          
    //         setError(false);
    //         navigate(`/welcome/${username}`);
    //         authContext.setAuthenticated(true);
    //         authContext.setUsername(username);
    // }else{
    //     setError(true);
      
    //     authContext.setAuthenticated(false);
    //     authContext.setUsername(null);
    // }
    // }

    async function authenticate(){

        const token = 'Basic '+window.btoa(username + ":"+password);

      try{
        const response =  await  executeBasicAuth(token)
        if(response.status == 200){

                setError(false);
                navigate(`/welcome/${username}`);
                authContext.setAuthenticated(true); 
                authContext.setToken(token)
                authContext.setUsername(username);
                apiClient.interceptors.request.use(
                    (config)=>{
                        console.log("Intercepting");
                        config.headers.Authorization = token
                        return config
                    }
                )

                
        }else{
            setError(true); 
          
            authContext.setAuthenticated(false);
            authContext.setUsername(null);
            authContext.setToken(null)
        }
    }catch(error){
        setError(true);
        authContext.setAuthenticated(false);
        authContext.setUsername(null);
        authContext.setToken(null)
    }
        }



    return(
            <div className="LoginComponent">
                <div className="LoginForm">
                    <h1>Time to Login</h1>

       {error && <div className="errorMsg">Incorrect Credentials</div>}
                    <div className="username">
                        <label htmlFor="username">Username : </label>
                        <input type="text"  name="username" value={username} onChange={handleUsername}/>
                    </div>
                    <div className="password">
                        <label htmlFor="password">Password : </label>
                        <input type="password"  name="password" onChange={handlePassword}/>
                    </div>
                    <button type="submit" onClick={authenticate} > Login </button>
                </div>
            </div>
    )
}
