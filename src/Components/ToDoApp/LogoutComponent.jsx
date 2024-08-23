import { useAuth } from "./security/AuthContext"

export default function LogoutComponent(){

    const authContext = useAuth();
    
    return(
        <>
        <h1>You are logged Out !</h1>
        {
            authContext.setAuthenticated(false)
           
        }
        {
             authContext.setToken(null)
        }
        </>
    )
}
