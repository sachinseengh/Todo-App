
import { apiClient } from './ApiClient';


export  const retrieveTodos= (username)=>apiClient.get(`/users/${username}/todos`)


export  const deleteTodo= (username,id)=>apiClient.delete(`/users/${username}/todos/${id}`)


export  const retrieveTodo= (username,id)=>apiClient.get(`/users/${username}/todos/${id}`)

export  const updateTodoApi= (username,id,todo)=>apiClient.put(`/users/${username}/todos/${id}`,todo)

export  const AddTodoApi= (username,todo)=>apiClient.post(`/users/${username}/todos`,todo)

