import { useState } from 'react'
import './todo.css'
import {BrowserRouter,Link,Route,Routes,useNavigate,useParams,Navigate} from 'react-router-dom'
import ErrorComponent from './ErrorComponent';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import LoginComponent from './LoginComponent';
import LogoutComponent from './LogoutComponent';
import TodosComponent from './TodosComponent';
import WelcomeComponent from './WelcomeComponent';
import AuthProvider,{useAuth} from './security/AuthContext';
import ToDoComponent from './ToDoComponent';



export default function TODO(){

  
function AuthenticateRoute({children}){
    const authContext = useAuth()
    
    if(authContext.isAuthenticated){
    return children
}else{
    return(
        <Navigate to="/" />
    )
}
}


    return(
        <>
   <AuthProvider>
   <BrowserRouter>
   <HeaderComponent></HeaderComponent>
   <Routes>
    <Route path="/" element={<LoginComponent></LoginComponent>}></Route>
    <Route path="/login" element={<LoginComponent></LoginComponent>}></Route>
    <Route path="/todos" element={
        <AuthenticateRoute>
        <TodosComponent></TodosComponent>
        </AuthenticateRoute>}></Route>
    <Route path="/welcome/:username" element={
        <AuthenticateRoute>
        <WelcomeComponent></WelcomeComponent>
        </AuthenticateRoute>}></Route>

        <Route path="/todos/:id" element={
        <AuthenticateRoute>
        <ToDoComponent></ToDoComponent>
        </AuthenticateRoute>}></Route>

    <Route path="/logout" element={
         <AuthenticateRoute>
        <LogoutComponent></LogoutComponent>
        </AuthenticateRoute>}></Route>
    <Route path="*" element={<ErrorComponent></ErrorComponent>}></Route>

   </Routes>
   <FooterComponent></FooterComponent>
   </BrowserRouter>
   
   </AuthProvider>
   </>
    
    )
}




