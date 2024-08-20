import {BrowserRouter,Link,Route,Routes,useNavigate,useParams} from 'react-router-dom'
import { useState } from 'react'

export default function LoginComponent(){
    const [username,setUsername] = useState("sachin");
    const [password,setPassword] = useState("");

    const [success,setSuccess] = useState(false);
    const [error,setError] = useState(false);

    function handleUsername(event){
        setUsername(event.target.value);
    }
    function handlePassword(event){
        setPassword(event.target.value);
    }
    const navigate = useNavigate();

    function authenticate(){
    if(username === "sachin" && password === "singh"){
        
            setSuccess(true);
            setError(false);
            navigate(`/welcome/${username}`);
    }else{
    
        setError(true);
        setSuccess(false);
    }
    }



    return(
            <div className="LoginComponent">
                <div className="LoginForm">
                    <h1>Time to Login</h1>
       {success &&   <div className="successMsg">SuccessFully Authenticated</div>}
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
