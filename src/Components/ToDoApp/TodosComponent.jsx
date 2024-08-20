export default function TodosComponent(){
    const date = new Date();
    const target = new Date(date.getFullYear()+12,date.getMonth(),date.getDay());
    
    const todos =[
        {id:1,description:"learn js",done:false,targetDate:target},
        {id:2,description:"learn jsx",done:false,targetDate:target},
    ]
        
    return(   
    <div className="container">
        <h1>Things you want to do</h1>
    
        <table className="table">
            <thead>
                <tr>
                <td>id</td>
                <td>description</td>
                <td>Done</td>
                <td>Target</td>
                </tr>
            </thead>
            <tbody>
               {
                todos.map(
                    todo => (
                        <tr key ={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.description}</td>
                            <td>{todo.done.toString()}</td>
                            <td>{todo.targetDate.toDateString()}</td>
                        </tr>
                    )
                )
               } 
            </tbody>
        </table>
    </div>
    )
    }
    