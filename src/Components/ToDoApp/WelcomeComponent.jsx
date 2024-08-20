import {BrowserRouter,Link,Route,Routes,useNavigate,useParams} from 'react-router-dom'

export default function WelcomeComponent(){

    const param = useParams();
return(   
<div className="Welcome Component">
    <h1>Welcome {param.username}</h1>
    <div>Manage your tods .<Link to="/todos">Go to Todos</Link></div>
</div>
)
}
