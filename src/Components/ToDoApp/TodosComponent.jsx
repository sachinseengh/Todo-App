import { useEffect, useState } from "react";
import { retrieveTodos,deleteTodo } from "./api/TodoService";


export default function TodosComponent(){

    function success(response){
        setTodos(response.data);
        
    }

    const [todos,setTodos] = useState([]);
    const date = new Date();
    const target = new Date(date.getFullYear()+12,date.getMonth(),date.getDay());

    const [message,setMessage] = useState(null);

    useEffect(
        ()=>refreshToDo(),[]
    )
    
function refreshToDo(){
   retrieveTodos('sachin')
   .then((response)=>success(response))
   .catch((error)=>console.log(error))
   .finally(console.log("final"))
    }

function handleDelete(id){

    deleteTodo('sachin',id)
    .then((response)=>{successMsg(id)})
    .catch((error)=>{failedMsg(id)});

    
}

function successMsg(id){
    setMessage(`Todo deleted of id = ${id}`)
    refreshToDo();
}
function failedMsg(id){
    setMessage(`Todo deletion Failed of id = ${id}`);
}
        
    return(   
    <div className="container">
        <h1>Things you want to do</h1>
      {message &&  <div className="alert alert-warning">{message}</div>}
    
        <table className="table">
            <thead>
                <tr>
                <td>id</td>
                <td>description</td>
                <td>Done</td>
                <td>Target</td>
                <td>Delete</td>
                </tr>
            </thead>
            <tbody>
               {
               todos.map((todo)=>(
               <tr key={todo.id}>
               <td>{todo.id}</td>
               <td>{todo.description}</td>
               <td>{todo.done.toString()}</td>
               <td>{todo.targetDate}</td>
               <td><button className="btn btn-danger" onClick={()=>handleDelete(todo.id)}> Delete</button></td>
               
               </tr>
               
               ))
               }
                
            </tbody>
        </table>
    </div>
    )
    }
    