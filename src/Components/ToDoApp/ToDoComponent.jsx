import { useNavigate, useParams } from "react-router-dom"
import { useAuth } from "./security/AuthContext";
import { useEffect, useState } from "react";
import { retrieveTodo,updateTodoApi ,AddTodoApi} from "./api/TodoService";
import {Field, Formik,Form,ErrorMessage} from 'formik';
import moment from 'moment';

export default function ToDoComponent(){

    const {id} = useParams();

    const authContext = useAuth();

    const navigate = useNavigate();

    const [description,setDescription] = useState(" ");
    const [targetDate,setTargetDate] = useState('');

    const username = authContext.username;
   
    
    useEffect(
    
        ()=>retrieveToDoDetail(),[id]
        
    )

    function retrieveToDoDetail(){
        if(id !=-1){
        retrieveTodo(username,id)
        .then((response)=>{
              setDescription(response.data.description)
            setTargetDate(response.data.targetDate)
            })
        .catch((error)=>console.log(error))
        }
    }

    function onSubmit(values){

        const todo={
            id:id,
            username:username,
            description:values.description,
            targetDate:values.targetDate,
            done:false
        }
        
        if(id==-1){
            console.log(todo);
         AddTodoApi(username,todo)
         .then((response)=>{
            navigate("/todos")
        })
        .catch((error)=>console.log(error))

        }else{
        updateTodoApi(username,id,todo)
        .then((response)=>{
            navigate("/todos")
        })
        .catch((error)=>console.log(error))
    }
    }

    function validate(values){
        let errors ={

        }
        if(values.description.length<5){
            errors.description = "Description must be greater than 5 letters";
        }

        if(values.targetDate == null || values.targetDate === ''){
            errors.targetDate = "Enter a valid Date";
        }

        console.log(values);
        return errors;
    }

    return(
        <div className="container">
        <Formik initialValues={{description,targetDate}} 
        enableReinitialize ={true}
        onSubmit={onSubmit}
        validate={validate}
        validateOnChange={false}
        validateOnBlur={false}
        > 
            {
                (props)=>(
                    <Form >
                    <ErrorMessage
                        name="description"
                        component="div"
                        className="alert alert-warning"
                        ></ErrorMessage>
                    <ErrorMessage
                        name="targetDate"
                        component="div"
                        className="alert alert-warning"
                        ></ErrorMessage>

                    <fieldset className="form-group">
                        <label htmlFor="">Description</label>
                        <Field type="text" className="form-control" name="description"></Field>
                    </fieldset>

                    <fieldset className="form-group">
                        <label htmlFor="">Target Date</label>
                        <Field type="date" className="form-control" name="targetDate"></Field>
                    </fieldset>

                    <div>
                        <button className="btn btn-success my-3" type="submit">save</button>
                    </div>
                    </Form>

                )
            }

        </Formik>
        </div>
    )
}