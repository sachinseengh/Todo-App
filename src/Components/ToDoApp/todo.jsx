import { useState } from 'react'
import './todo.css'
import {BrowserRouter,Link,Route,Routes,useNavigate,useParams} from 'react-router-dom'
import ErrorComponent from './ErrorComponent';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import LoginComponent from './LoginComponent';
import LogoutComponent from './LogoutComponent';
import TodosComponent from './TodosComponent';
import WelcomeComponent from './WelcomeComponent';

export default function TODO(){
    return(
        <>
    <HeaderComponent></HeaderComponent>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<LoginComponent></LoginComponent>}></Route>
    <Route path="/login" element={<LoginComponent></LoginComponent>}></Route>
    <Route path="/todos" element={<TodosComponent></TodosComponent>}></Route>
    <Route path="/welcome/:username" element={<WelcomeComponent></WelcomeComponent>}></Route>
    <Route path="/logout" element={<LogoutComponent></LogoutComponent>}></Route>
    <Route path="*" element={<ErrorComponent></ErrorComponent>}></Route>

   </Routes>
   </BrowserRouter>
   <FooterComponent></FooterComponent>
   </>
    
    )
}




