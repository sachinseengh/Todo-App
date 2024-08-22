import { createContext, useContext, useState } from "react";


// 1.create a context
export const AuthContext = createContext();

export const useAuth = ()=>useContext(AuthContext);


//2.share the created context with other component
export default function AuthProvider({children}){
    const [username,setUsername] = useState(null);

    //3.put the state in context
    const [number,setNumber] = useState(100);

    const [isAuthenticated,setAuthenticated] = useState(false);
    return(
        <AuthContext.Provider value={{isAuthenticated,setAuthenticated,username,setUsername}}>
            {children}
        </AuthContext.Provider>
    )
}
