import {BrowserRouter,Link,Route,Routes,useNavigate,useParams} from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from './security/AuthContext';

export default function LoginComponent(){

    const [username,setUsername] = useState("sachin");
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

    function authenticate(){
    if(username === "sachin" && password === "singh"){
          
            setError(false);
            navigate(`/welcome/${username}`);
            authContext.setAuthenticated(true);
            authContext.setUsername(username);
    }else{
        setError(true);
      
        authContext.setAuthenticated(false);
        authContext.setUsername(null);
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
