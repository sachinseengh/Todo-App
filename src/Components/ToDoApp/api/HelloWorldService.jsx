

import { apiClient } from './ApiClient';

//using same url repeatedly
// export  const retrieveHelloWorld = ()=> apiClient.get('/hello-world-bean')

export  const retrieveHelloWorldPathVariable= (username,token)=>apiClient.get(`/hello-world/path-variable/${username}`,{

    headers:{
        Authorization: token
    }
})

export  const executeBasicAuth= (token)=>apiClient.get(`/basicauth`,{
    headers:{
        Authorization: token
    }
})





