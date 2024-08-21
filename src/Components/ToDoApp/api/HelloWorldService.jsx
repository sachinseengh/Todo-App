
import axios from 'axios';


const apiClient = axios.create({

    baseURL : 'http://localhost:8080'
})

//using same url repeatedly
// export  const retrieveHelloWorld = ()=> apiClient.get('/hello-world-bean')

export  const retrieveHelloWorldPathVariable= (username)=>apiClient.get(`/hello-world/path-variable/${username}`)



