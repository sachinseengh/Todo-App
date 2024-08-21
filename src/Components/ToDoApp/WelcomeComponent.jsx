import {BrowserRouter,Link,Route,Routes,useNavigate,useParams} from 'react-router-dom'

import { useState } from 'react';
import   {retrieveHelloWorld} from './api/HelloWorldService';
import  {retrieveTodos} from './api/TodoService'

export default function WelcomeComponent(){

    const [message,setMessage] = useState(null);

    const params = useParams();

function callHelloWorldAPI(){
    // axios.get('http://localhost:8080/hello-world')
    // .then((response)=>successfulResponse(response))
    // .catch((error)=>errorResponse(error))
    // .finally(()=>console.log('cleanup'));

  
    // retrieveHelloWorld()
    // .then((response)=>successfulResponse(response))
    // .catch((error)=>errorResponse(error))
    // .finally(()=>console.log('cleanup'));


    //  retrieveHelloWorldPathVariable(params.username)
    // .then((response)=>successfulResponse(response))
    // .catch((error)=>errorResponse(error))
    // .finally(()=>console.log('cleanup'));

    //doing it from todo component
    // retrieveTodos(params.username)
    // .then((response)=>successfulResponse(response))
    // .catch((error)=>errorResponse(error))
    // .finally(()=>console.log('cleanup'));
}

function successfulResponse(response){
    console.log('success');
    console.log(response);
    setMessage(response);
    
}
function errorResponse(){
    console.log('Failed');
}

    const param = useParams();
return(   
<div className="Welcome Component">
    <h1>Welcome {param.username}</h1>
    <div>Manage your tods .<Link to="/todos">Go to Todos</Link></div>

    <button className='btn btn-success my-2' onClick={callHelloWorldAPI}> Call Hello World</button>

     <h3 className='text-color:blue'>{message}</h3>
</div>
)
}
