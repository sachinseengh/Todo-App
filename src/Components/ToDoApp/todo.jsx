import './todo.css'

export default function TODO(){
    return(
        <>
        ToDo Management  Application
        <LoginComponent></LoginComponent>
        <WelcomeComponent></WelcomeComponent>
        </>
    )
}

function LoginComponent(){

    return(
            <div className="LoginComponent">
                <div className="LoginForm">
                    <div className="username">
                        <label htmlFor="username">Username : </label>
                        <input type="text"  name="username" value="sachin"/>
                    </div>
                    <div className="password">
                        <label htmlFor="password">Password : </label>
                        <input type="password"  name="password"/>
                    </div>

                    <button type="submit" > Login </button>
                </div>
            </div>
    )
}

function WelcomeComponent(){
return(
    
<div className="Welcome Component">
    Welcome Component
</div>

)
}
