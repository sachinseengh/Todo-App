import { createContext, useContext, useState } from "react";


// 1.create a context
export const AuthContext = createContext();

export const useAuth = ()=>useContext(AuthContext);


//2.share the created context with other component
export default function AuthProvider({children}){


    //3.put the state in context
    const [number,setNumber] = useState(100);

    const [isAuthenticated,setAuthenticated] = useState(false);
    return(
        <AuthContext.Provider value={{isAuthenticated,setAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}
